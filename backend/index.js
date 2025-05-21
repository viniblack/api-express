import express from "express";
import cors from "cors";
import axios from "axios";
const PORT = process.env.PORT || 5000;
const app = express();
import dotenv from "dotenv";
dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ menssage: "API Frete" });
});

app.post("/shipment", async (req, res) => {
  const zipcodeFrom = req.body.from_postal_code;
  const zipcodeTo = req.body.to_postal_code;
  const products = req.body.products;

  if (!zipcodeFrom || !zipcodeTo) {
    return res
      .status(400)
      .json({
        error:
          "Está faltando algum campo ou os produtos não estão corretamente formatados",
      });
  }
  try {
    const response = await axios.post(
      "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate", // sandbox: https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate
      {
        from: { postal_code: zipcodeFrom },
        to: { postal_code: zipcodeTo },
        products: products,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SECRET_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error(err?.response?.data || err);
    res.status(400).json({ error: err.message || err });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
