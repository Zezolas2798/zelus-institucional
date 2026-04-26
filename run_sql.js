const { Client } = require('pg');
const fs = require('fs');

async function run() {
  const client = new Client({
    connectionString: 'postgresql://postgres.pibbwlscjalpmidtlefn:ConsultoriaZelus@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('Conectado ao Supabase...');
    
    const sql = fs.readFileSync('../supabase_setup.sql', 'utf8');
    await client.query(sql);
    
    console.log('SQL executado com sucesso!');
  } catch (err) {
    console.error('Erro:', err);
  } finally {
    await client.end();
  }
}

run();
