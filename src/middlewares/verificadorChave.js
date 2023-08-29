module.exports = (req, res, next) => {
  const { chave } = req.headers;
  if (!chave || chave !== "1234") {
    return res.status(401).json({
      erro: "Acesso negado",
    });
  }
  next();
};
