var faker = require("faker/locale/pt_BR");

exports.up = function (knex) {
  let desaparecimentos = [];
  let qtd = 1,
    cod_pessoa = 1,
    cod_local = 1;
  const fonte = ["Mãe", "Pai", "Vizinho", "Tio", "Amigo"];

  while (qtd <= 3000) {
    desaparecimentos.push({
      cod_desaparecimento: qtd,
      cod_pessoa: cod_pessoa,
      cod_local: cod_local,
      data_desaparecimento: new Date(
        faker.date.past() - faker.datatype.number(10000000000)
      ),
      informacoes: faker.lorem.paragraph(),
      fonte: fonte[Math.floor(Math.random() * fonte.length)],
      boletim_ocorrencia: faker.datatype.number(1),
      ultima_hora_vista: new Date(
        faker.date.past() - faker.datatype.number(10000000000)
      ),
    });
    qtd++;
    cod_local++;
    cod_pessoa++;
    if (cod_pessoa === 3000) {
      cod_pessoa = 1;
    }
    if (cod_local === 2500) {
      cod_local = 1;
    }
  }
  return knex("desaparecimentos").insert(desaparecimentos);
};

exports.down = function (knex) {
  return knex("desaparecimentos").del();
};
