import express from "express";
import { pool } from "./db.js";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const { cpf } = req.body;

  try {
    const consulta = await pool.query("SELECT * FROM pessoas_cpf($1::text)", [cpf]);

    if (consulta.rows.length === 0) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }

    res.json(consulta.rows);
  } catch (err) {
    console.error("Erro ao consultar cpf:", err);
    res.status(500).json({ error: "Erro interno ao consultar o banco" });
  }
});

app.listen(3003, () => console.log("Servidor rodando na porta 3003"));
