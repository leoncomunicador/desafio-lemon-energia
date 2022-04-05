import { classesAceitas, modalidadesAceitas } from '../models/tiposValidos.js';

const media = (consumo) => {
  let mediaConsumo = consumo.reduce((acc, cur) => acc + cur, 0) / consumo.length;

  return mediaConsumo.toFixed(2);
}

const validaCliente = async (req, res, next) => {
  const {
    classeDeConsumo,
    modalidadeTarifaria,
    historicoDeConsumo,
    tipoDeConexao
  } = req.body;

  
  let errorMessage = [];

  if(!classesAceitas.includes(classeDeConsumo)) {
    errorMessage.push('Classe de consumo não aceita');
  }

  if (!modalidadesAceitas.includes(modalidadeTarifaria)) {
    errorMessage.push('Modalidade tarifária não aceita');
  }

  if(historicoDeConsumo.length < 3 && historicoDeConsumo.length > 12) {
    errorMessage.push('Quantidade de medições inválidas');
  }
  
  historicoDeConsumo.forEach((el) => {
    if (+el > 9999) errorMessage.push('Consumo mensal de 1 ou mais faturas está excedente') 
  })

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
        "elegivel": false,
        "razoesDeInelegibilidade": errorMessage      
    });
  }
  next();
}

export default {
  validaCliente
};
