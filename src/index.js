import express from "express";
import { getRote } from "./controller.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.post('/', getRote);
app.listen(port, () => console.log(`App rodando na porta ${port}!`));
