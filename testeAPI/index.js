const { criarUf, listarUfs } = require("./uf");
const { criarCidade, listarCidades } = require("./cidade");
const { criarBairro, listarBairros } = require("./bairro");
const { criarLocal, listarLocais } = require("./local");
const { criarPessoa, listarPessoas } = require("./pessoa");
const {
  criarDesaparecimento,
  listarDesaparecimentos,
} = require("./desaparecimento");

async function criacao() {
  const id_uf = await criarUf("BA").then((retorno) => retorno);
  console.log("\nUF criada com código:", id_uf);

  const id_cidade = await criarCidade(id_uf, "Vitória da Conquista").then(
    (retorno) => retorno
  );
  console.log("Cidade criada com código:", id_cidade);

  const id_bairro = await criarBairro(id_cidade, "Centro").then(
    (retorno) => retorno
  );
  console.log("Bairro criado com código:", id_bairro);

  const id_local = await criarLocal(id_bairro, "-14.853957", "-40.839598").then(
    (retorno) => retorno
  );
  console.log("Local criado com código:", id_local);

  const id_pessoa = await criarPessoa({
    nome: "José Souza de Oliveira",
    data_nascimento: "02/12/1985",
    imagem: "http://www.avatar.com.br/jose",
    sexo: "M",
    cor_olhos: "Castanho",
    cor_pele: "Branco",
    cor_cabelo: "Loiro",
    peso_aproximado: 62,
    altura_aproximada: 1.8,
    tipo_fisico: "Magro",
    transtorno_mental: "Nenhum",
    marca_caracteristica: "Tatuagem em perna direita",
  }).then((retorno) => retorno);
  console.log("Pessoa criada com código:", id_pessoa);

  const id_desaparecimento = await criarDesaparecimento({
    cod_pessoa: id_pessoa,
    cod_local: id_local,
    data_desaparecimento: "01/11/2021",
    informacoes: "Saiu para comprar cigarro",
    fonte: "Mãe",
    boletim_ocorrencia: 1,
    ultima_hora_vista: "19:00:00",
  }).then((retorno) => retorno);
  console.log("Desaparecimento criado com código:", id_desaparecimento);
}

async function listagem() {
  console.log("\nLista de UFs: ");
  await listarUfs();
  console.log("\nLista de Cidades: ");
  await listarCidades();
  console.log("\nLista de Bairros: ");
  await listarBairros();
  console.log("\nLista de Locais: ");
  await listarLocais();
  console.log("\nLista de Pessoas: ");
  await listarPessoas();
  console.log("\nLista de Desaparecimentos: ");
  await listarDesaparecimentos();
}

(async () => {
  await listagem();
  await criacao();
  await listagem();
})();
