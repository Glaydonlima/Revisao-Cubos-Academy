const {estudantes, fila} = require("../data");

const filaController = {};

filaController.mostrarFila = (req, res) => {
  const { turma, qtd } = req.query;
  let resposta = [...fila];
  if (turma) {
    resposta = resposta.filter((fila) => fila === turma);
  }
  if (qtd) {
    resposta.slice(0, qtd);
  }
  return res.json(resposta);
};
filaController.mostrarItem = (req, res) => {
  const posicao = parseInt(req.params.id) - 1;
  const item = fila[posicao];
  return res.json(item);
};
filaController.criarItem = (req, res) => {
  const { estudante, problema } = req.body;
  if (!estudante || !problema) {
    return res.status(400).json({
      erro: "Estudante e problema são obrigatórios",
    });
  }

  const dadosEstudante = estudantes.find((e) => e.nome === estudante);
  if (!dadosEstudante) {
    return res.json({
      erro: "Estudante não encontrado",
    });
  }

  const { nome, discord_link, turma } = dadosEstudante;
  const novoChamado = {
    estudante: nome,
    discord_link,
    turma,
    descricao: problema,
    status: "Em andamento",
    data_hora: "2020-01-01 10:00:00",
  };
  fila.push(novoChamado);
  return res.status(201).json(novoChamado);
};

module.exports = filaController;
