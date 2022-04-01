const dadosCliente = {
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
    3878, // mes atual
    9760, // mes anterior
    5976, // 2 meses atras
    2797, // 3 meses atras
    2481, // 4 meses atras
    5731, // 5 meses atras
    7538, // 6 meses atras
    4392, // 7 meses atras
    7859, // 8 meses atras
    4160, // 9 meses atras
    6941, // 10 meses atras
    4597  // 11 meses atras
  ]
}

const media = (dados) => {
  let historico = dados.historicoDeConsumo;
  let somaConsumo = historico.reduce((acc, cur) => acc + cur, 0);
  let mediaConsumo = somaConsumo / 12;
  let economiaAnualDeCO2 = (somaConsumo * 84) / 1000;
  console.log(economiaAnualDeCO2); // 5553.24

  return mediaConsumo.toFixed(2); // 5509.17
}


console.log(media(dadosCliente));