import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});


pool.connect()
  .then(() => console.log("✅ Conectado ao PostgreSQL local"))
  .catch(err => console.error("❌ Erro na conexão com o banco:", err));
