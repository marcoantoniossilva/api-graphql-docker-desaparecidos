var faker = require("faker/locale/pt_BR");

exports.up = function (knex) {
  let locais = [];
  let qtd = 1,
    cod_bairro = 1;
  while (qtd <= 2500) {
    locais.push({
      cod_local: qtd,
      cod_bairro: cod_bairro,
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
    });
    qtd++;
    cod_bairro++;
    if (cod_bairro === 20000) {
      cod_bairro = 1;
    }
  }
  return knex("locais").insert(locais);
};

exports.down = function (knex) {
  return knex("locais").del();
};
