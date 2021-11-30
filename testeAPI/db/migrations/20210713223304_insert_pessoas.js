var faker = require("faker/locale/pt_BR");

exports.up = function (knex) {
  let pessoas = [];
  let qtd = 1;
  const sexo = "FM";
  const corOlhos = [
    "Azul",
    "Verde",
    "Preto",
    "Castanho",
    "Castanho Claro",
    "Castanho Claro",
  ];
  const corCabelo = ["Preto", "Castanho", "Ruivo", "Loiro", "Branco"];
  const corPele = ["Preto", "Castanho", "Ruivo", "Loiro", "Branco"];
  const tipoFisico = ["Desnutrido", "Normal", "Sobrepeso", "Obeso"];
  const transtornosMentais = [
    "Depressão",
    "Síndrome do pânico",
    "Nenhum",
    "Esquizofrenia",
  ];
  const prefMarca = ["Mancha", "Cicatriz", "Tatuagem"];
  const sufMarca = [
    "perna direita",
    "perna esqueda",
    "braço direito",
    "braço direito",
  ];

  while (qtd <= 3000) {
    pessoas.push({
      nome: faker.name.findName(),
      data_nascimento: new Date(
        faker.date.past() - faker.datatype.number(1000000000000)
      ),
      imagem: faker.image.avatar(),
      sexo: sexo.charAt(Math.floor(Math.random() * sexo.length)),
      cor_olhos: corOlhos[Math.floor(Math.random() * corOlhos.length)],
      cor_pele: corPele[Math.floor(Math.random() * corPele.length)],
      cor_cabelo: corPele[Math.floor(Math.random() * corCabelo.length)],
      peso_aproximado: Math.trunc(Math.random() * (110 - 45) + 45),
      altura_aproximada: parseFloat(Math.random() * (2 - 1.5) + 1.5).toFixed(2),
      tipo_fisico: tipoFisico[Math.floor(Math.random() * tipoFisico.length)],
      transtorno_mental:
        transtornosMentais[
          Math.floor(Math.random() * transtornosMentais.length)
        ],
      marca_caracteristica:
        prefMarca[Math.floor(Math.random() * prefMarca.length)] +
        " em " +
        sufMarca[Math.floor(Math.random() * sufMarca.length)],
    });
    qtd++;
  }
  return knex("pessoas").insert(pessoas);
};

exports.down = function (knex) {
  return knex("pessoas").del();
};
