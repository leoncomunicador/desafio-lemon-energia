const express = require('express');
const middleware = require("./middlewares/filterParameters.js");
const { statusClient } = require("./controllers/conta.js");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.post('/', middleware.validaCliente, statusClient);
app.listen(port, () => console.log(`App rodando na porta ${port}!`));
