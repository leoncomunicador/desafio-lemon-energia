import express from "express";
import { statusClient } from "./controllers/conta.js";
import middleware from "./middlewares/filterParameters.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.post('/', middleware.validaCliente, statusClient);
app.listen(port, () => console.log(`App rodando na porta ${port}!`));
