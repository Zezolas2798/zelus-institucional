const { Client } = require('pg');
const fs = require('fs');

async function run() {
  const client = new Client({
    connectionString: 'postgresql://postgres.jcufbobitdnfybxztmcl:ConsultoriaZelus@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('Conectado ao Supabase (novo projeto)...');
    
    const sql = fs.readFileSync('../fix_rls.sql', 'utf8');
    await client.query(sql);
    
    console.log('SQL de correção do RLS executado com sucesso!');
  } catch (err) {
    console.error('Erro:', err);
  } finally {
    await client.end();
  }
}

run();
