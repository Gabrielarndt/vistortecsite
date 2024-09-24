const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');

app.use(cors({
  origin: 'http://localhost:3000', // Permitir somente este domínio
  credentials: true, // Permitir o envio de cookies
}));


app.use(express.json());

app.use(cookieParser());

// Configuração do pool de conexão com o PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "vistoria_db",
  password: "admin",
  port: 5432,
});

app.use(bodyParser.json());

// Rota para criar um pedido de vistoria
app.post("/api/inspection-request", async (req, res) => {
  const {
    tipo_vistoria,
    tipo_imovel,
    mobiliario,
    inventario,
    imovel_novo,
    entregue_limpo,
    energia_eletrica_ligada,
    pintura_nova,
    possui_moveis_sob_medida,
    rua,
    bairro,
    cidade,
    estado,
    cep,
    receber_vistoria,
    localizador,
    dados_vistoria,
    observacoes,
    email_cliente,
    nomes_locatarios,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO inspection_requests
             (tipo_vistoria, tipo_imovel, mobiliario, inventario, imovel_novo, entregue_limpo, energia_eletrica_ligada, pintura_nova, possui_moveis_sob_medida, rua, bairro, cidade, estado, cep, receber_vistoria, localizador, dados_vistoria, observacoes, email_cliente)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
             RETURNING id`,
      [
        tipo_vistoria,
        tipo_imovel,
        mobiliario,
        inventario,
        imovel_novo,
        entregue_limpo,
        energia_eletrica_ligada,
        pintura_nova,
        possui_moveis_sob_medida,
        rua,
        bairro,
        cidade,
        estado,
        cep,
        receber_vistoria,
        localizador,
        dados_vistoria,
        observacoes,
        email_cliente,
      ]
    );

    const requestId = result.rows[0].id;

    // Adiciona os locatários à tabela tenant_names
    if (nomes_locatarios && typeof nomes_locatarios === "string") {
      const locatarios = nomes_locatarios.split(","); // Se estiver separado por vírgulas
      for (const locatario of locatarios) {
        await pool.query(
          "INSERT INTO locatarios (vistoria_id, nome_locatario) VALUES ($1, $2)",
          [requestId, locatario.trim()]
        );
      }
    }

    res.status(201).json({ message: "Pedido de vistoria criado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar pedido de vistoria" });
  }
});

app.post("/api/register", async (req, res) => {
  const { fullName, phoneNumber, email, password } = req.body;

  // Verificar se o email já existe no banco de dados
  const emailExists = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1",
    [email]
  );
  if (emailExists.rows.length > 0) {
    return res.status(400).json({ message: "Este email já está registrado." });
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Inserir o novo usuário no banco de dados
  try {
    await pool.query(
      "INSERT INTO usuarios (nome_completo, telefone, email, senha) VALUES ($1, $2, $3, $4)",
      [fullName, phoneNumber, email, hashedPassword]
    );
    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao registrar o usuário." });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userQuery = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (userQuery.rows.length === 0) {
      return res.status(401).json({ success: false, message: "Email ou senha incorretos." });
    }

    const user = userQuery.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.senha);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Email ou senha incorretos." });
    }

    // Definir o cookie na resposta
    res.cookie('user_email', email, { 
      httpOnly: false,   // Se precisar ser acessado no frontend (para teste), deixe httpOnly como false
      secure: false,     // Coloque como true se estiver usando HTTPS
      sameSite: 'Lax',   // Define a política de envio do cookie
    });

    res.status(200).json({ success: true, message: "Login bem-sucedido." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao processar o login." });
  }
});



  app.get("/api/user-info", async (req, res) => {
    const { email } = req.query; // Obtém o email do usuário da query string
  
    try {
      const result = await pool.query("SELECT nome_completo, telefone, email FROM usuarios WHERE email = $1", [email]);
      
      if (result.rows.length > 0) {
        res.status(200).json({ success: true, user: result.rows[0] });
      } else {
        res.status(404).json({ success: false, message: "Usuário não encontrado." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Erro ao obter informações do usuário." });
    }
  });

  app.get('/api/inspections', async (req, res) => {
    console.log('Cookies recebidos:', req.cookies);  // Adicione isso para depuração
    const emailLogado = req.cookies.userEmail;  // Verifique se é 'userEmail'
  
    if (!emailLogado) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }
  
    try {
      const result = await pool.query('SELECT * FROM inspection_requests');

      if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Nenhuma vistoria encontrada' });
      }

      res.json(result.rows);
  } catch (error) {
      console.error('Erro ao buscar as vistorias:', error); // Log do erro
      res.status(500).json({ error: 'Erro ao buscar as vistorias' });
  }
  });
  
  app.get('/api/inspections/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const inspection = await pool.query('SELECT * FROM inspection_requests WHERE id = $1', [id]);
      if (inspection.rows.length === 0) {
        return res.status(404).json({ error: 'Vistoria não encontrada' });
      }
      res.json(inspection.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar a vistoria' });
    }
  });
  
  
  
  
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


