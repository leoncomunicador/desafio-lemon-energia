const media = (consumo) => {
  let mediaConsumo = consumo.reduce((acc, cur) => acc + cur, 0) / consumo.length;

  return mediaConsumo.toFixed(2);
}

const validaCliente = async (req, res, next) => {
  const {
    classeDeConsumo,
    modalidadesTarifarias,
    historicoDeConsumo,
    tipoDeConexao
  } = req.body;

  let errorMessage = [];

  if (classeDeConsumo === 'poderPublico' || classeDeConsumo === 'rural') {
    errorMessage.push('Classe de consumo não aceita');
  }

  if (modalidadesTarifarias !== 'convencional' || modalidadesTarifarias !== 'branca') {
    errorMessage.push('Modalidade tarifária não aceita');
  }
  const consumoMedio = media(historicoDeConsumo);
  if (consumoMedio < 400 && tipoDeConexao === 'monofasico') {
    errorMessage.push('Consumo muito baixo para tipo de conexão');
  }

  if (consumoMedio < 500 && tipoDeConexao === 'bifasico') {
    errorMessage.push('Consumo muito baixo para tipo de conexão');
  }

  if (consumoMedio < 750 && tipoDeConexao === 'trifasico') {
    errorMessage.push('Consumo muito baixo para tipo de conexão');
  }

  if (errorMessage.length > 0) {
    return res.status(200).json({
      message: {
        "elegivel": false,
        "razoesDeInelegibilidade": errorMessage
      }
    });
  }

  next();
}

export default {
  validaCliente
};
