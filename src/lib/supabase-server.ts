import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

// Server-only Supabase client using service_role key.
// NEVER import this file from client components.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey)
