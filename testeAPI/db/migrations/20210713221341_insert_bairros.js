var faker = require("faker/locale/pt_BR");

exports.up = function (knex) {
  let bairros = [];
  let qtd = 1,
    cod_cidade = 1;
  while (qtd <= 2800) {
    bairros.push({
      cod_bairro: qtd,
      cod_cidade: cod_cidade,
      nome_bairro: faker.address.city().replace("undefined ", ""),
    });
    qtd++;
    cod_cidade++;
    if (cod_cidade === 400) {
      cod_cidade = 1;
    }
  }
  return knex("bairros").insert(bairros);
};

exports.down = function (knex) {
  return knex("bairros").del();
};
