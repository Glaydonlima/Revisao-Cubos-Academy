const express = require("express");
const verificadorChave = require("./middlewares/verificadorChave");
const router = require("./router");

const app = express();
app.use(express.json());

app.use(verificadorChave);
app.use(router);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
