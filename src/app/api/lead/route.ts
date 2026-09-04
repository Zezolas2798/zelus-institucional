import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-server";

// --- Sanitization helpers ---

/** Strip HTML tags and trim whitespace */
function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // remove HTML tags
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/[<>]/g, "")    // remove any remaining angle brackets
    .trim();
}

/** Only allow digits, spaces, parentheses, dashes, and plus sign */
function sanitizePhone(input: string): string {
  return input.replace(/[^\d\s()\-+]/g, "").trim();
}

// --- Simple in-memory rate limiter ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;         // max 5 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }

  return false;
}

// Allowed segments (whitelist)
const ALLOWED_SEGMENTS = [
  "Restaurante / Bistrô",
  "Hamburgueria / Fast Food",
  "Pizzaria",
  "Padaria / Confeitaria",
  "Café / Cafeteria",
  "Buffet / Eventos",
  "Cozinha Industrial",
  "Refeitório Corporativo",
  "Indústria de Alimentos",
  "Supermercado",
  "Açougue / Peixaria",
  "Hortifruti",
  "Hotelaria",
  "Escola / Creche",
  "Hospital / Clínica",
  "Outro",
];

export async function POST(request: NextRequest) {
  try {
    // Rate limit by IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Tente novamente em 1 minuto." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { nome_responsavel, telefone, segmento, desafio_principal } = body;

    // --- Validation ---
    if (!nome_responsavel || !telefone || !segmento || !desafio_principal) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const cleanName = sanitize(String(nome_responsavel));
    const cleanPhone = sanitizePhone(String(telefone));
    const cleanSegment = sanitize(String(segmento));
    const cleanChallenge = sanitize(String(desafio_principal));

    // Validate lengths
    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { error: "Nome inválido." },
        { status: 400 }
      );
    }
    if (cleanPhone.length < 10 || cleanPhone.length > 20) {
      return NextResponse.json(
        { error: "Telefone inválido." },
        { status: 400 }
      );
    }
    if (cleanChallenge.length < 5 || cleanChallenge.length > 1000) {
      return NextResponse.json(
        { error: "Descreva seu desafio com pelo menos 5 caracteres." },
        { status: 400 }
      );
    }

    // Whitelist check for segment
    if (!ALLOWED_SEGMENTS.includes(cleanSegment)) {
      return NextResponse.json(
        { error: "Segmento inválido." },
        { status: 400 }
      );
    }

    // --- Insert via server-side Supabase (service_role bypasses RLS) ---
    const { error } = await supabaseAdmin.from("leads").insert([
      {
        origem: "Site",
        status: "Novo",
        nome_responsavel: cleanName,
        telefone: cleanPhone,
        segmento: cleanSegment,
        desafio_principal: cleanChallenge,
      },
    ]);

    if (error) {
      // Log server-side only, never expose to client
      console.error("[API /lead] Supabase error:", error.message);
      return NextResponse.json(
        { error: "Erro interno. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
