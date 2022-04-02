const statusClient = (req, res) => {
  const { historicoDeConsumo } = req.body;

  let somaConsumo = historicoDeConsumo.reduce((acc, cur) => acc + cur, 0) / historicoDeConsumo.length;
  let economiaAnualDeCO2 = (somaConsumo * 84) / 1000;

  return res.status(200).json({elegivel: true, economiaAnualDeCO2: economiaAnualDeCO2});  
};


export {
  statusClient,
};
