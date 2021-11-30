var faker = require("faker/locale/pt_BR");

exports.up = (knex) => {
  let cidades = [];
  let qtd = 1,
    cod_uf = 1;
  while (qtd <= 400) {
    cidades.push({
      cod_cidade: qtd,
      cod_uf: cod_uf,
      nome_cidade: faker.address.city().replace("undefined ", ""),
    });
    qtd++;
    cod_uf++;
    if (cod_uf === 28) {
      cod_uf = 1;
    }
  }
  return knex("cidades").insert(cidades);
};

exports.down = function (knex) {
  return knex("cidades").del();
};
