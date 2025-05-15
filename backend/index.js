import express from 'express';
import axios from 'axios';
import { fretePorEstado } from './frete.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ menssage: 'API Frete' })
})

app.get('/frete', async (req, res) => {
    const cep = req.query.cep;

    if (!cep) {
        return res.status(400).json({ error: 'CEP é obrigatório.' });
    }

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;

        if (data.erro) {
            return res.status(404).json({ error: 'CEP não encontrado.' });
        }

        const estado = data.uf;
        const frete = fretePorEstado[estado];

        if (!frete) {
            return res.status(400).json({ error: 'Estado não suportado para cálculo de frete.' });
        }

        res.json({
            cep: data.cep,
            logradouro: data.logradouro,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: estado,
            valor_frete: frete.toFixed(2)
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar o CEP.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})