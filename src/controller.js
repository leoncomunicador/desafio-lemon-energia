const getRote = (req, res) => {
  const dadosCliente = req.body;
  let historico = dadosCliente.historicoDeConsumo;
  let somaConsumo = historico.reduce((acc, cur) => acc + cur, 0);
  let mediaConsumo = somaConsumo / 12;
  let economiaAnualDeCO2 = (somaConsumo * 84) / 1000;
  

   mediaConsumo.toFixed(2); // 5509.17
  
  
  return res.status(200).json({elegivel: true, economiaAnualDeCO2: economiaAnualDeCO2});  
};


export {
  getRote,
};
