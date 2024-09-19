const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());


// Configuração do pool de conexão com o PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vistoria_db',
    password: 'admin',
    port: 5432,
});

app.use(bodyParser.json());

// Rota para criar um pedido de vistoria
app.post('/api/inspection-request', async (req, res) => {
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
        nomes_locatarios
    } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO inspection_requests
             (tipo_vistoria, tipo_imovel, mobiliario, inventario, imovel_novo, entregue_limpo, energia_eletrica_ligada, pintura_nova, possui_moveis_sob_medida, rua, bairro, cidade, estado, cep, receber_vistoria, localizador, dados_vistoria, observacoes, email_cliente)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
             RETURNING id`,
            [tipo_vistoria, tipo_imovel, mobiliario, inventario, imovel_novo, entregue_limpo, energia_eletrica_ligada, pintura_nova, possui_moveis_sob_medida, rua, bairro, cidade, estado, cep, receber_vistoria, localizador, dados_vistoria, observacoes, email_cliente]
        );

        const requestId = result.rows[0].id;

        // Adiciona os locatários à tabela tenant_names
        if (nomes_locatarios && typeof nomes_locatarios === 'string') {
            const locatarios = nomes_locatarios.split(','); // Se estiver separado por vírgulas
            for (const locatario of locatarios) {
                await pool.query(
                    'INSERT INTO locatarios (vistoria_id, nome_locatario) VALUES ($1, $2)',
                    [requestId, locatario.trim()]
                );
            }
        }

        res.status(201).json({ message: 'Pedido de vistoria criado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar pedido de vistoria' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
