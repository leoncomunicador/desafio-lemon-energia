const frisby = require('frisby');

const url = 'http://localhost:3000';

describe('A aplicação deve cadastrar com sucesso um cliente', () => {

  it('Será validado que é possível cadastrar um cliente com os dados', async () => {
    await frisby.post(`${url}`, {
      "numeroDoDocumento": "14041737706",
      "tipoDeConexao": "bifasico",
      "classeDeConsumo": "comercial",
      "modalidadeTarifaria": "convencional",
      "historicoDeConsumo": [
        3878,
        9760,
        5976,
        2797,
        2481,
        5731,
        7538,
        4392,
        7859,
        4160,
        6941,
        4597
      ]
    })
      .expect('status', 200)
      .then((response) => {
        const { _json } = response;
        expect(response._json).toStrictEqual({ 'elegivel': true, 'economiaAnualDeCO2': 5553.24 });
      });
  });

  it('Será validado os motivos da inelegibilidade do cliente ', async () => {
    await frisby.post(`${url}`, {
      "numeroDoDocumento": "14041737706",
      "tipoDeConexao": "bifasico",
      "classeDeConsumo": "rural",
      "modalidadeTarifaria": "verde",
      "historicoDeConsumo": [
        3878,
        9760,
        5976,
        2797,
        2481,
        5731,
        7538,
        4392,
        7859,
        4160,
      ]
    })
      .expect('status', 200)
      .then((response) => {
        const { _json } = response;
        expect(response._json).toStrictEqual({
          "elegivel": false,
          "razoesDeInelegibilidade": [
            "Classe de consumo não aceita",
            "Modalidade tarifária não aceita"
          ]
        });
      });
  });

});
