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
  const id_uf1 = await criarUf("BA").then((retorno) => retorno);
  console.log("\nUF criada com código:", id_uf1);

  const id_uf2 = await criarUf("SP").then((retorno) => retorno);
  console.log("\nUF criada com código:", id_uf2);

  const id_uf3 = await criarUf("MG").then((retorno) => retorno);
  console.log("\nUF criada com código:", id_uf3);

  const id_cidade1 = await criarCidade(id_uf1, "Vitória da Conquista").then(
    (retorno) => retorno
  );
  console.log("Cidade criada com código:", id_cidade1);

  const id_cidade2 = await criarCidade(id_uf2, "São Paulo").then(
    (retorno) => retorno
  );
  console.log("Cidade criada com código:", id_cidade2);

  const id_cidade3 = await criarCidade(id_uf3, "Águas Vermelhas").then(
    (retorno) => retorno
  );
  console.log("Cidade criada com código:", id_cidade3);

  const id_bairro1 = await criarBairro(id_cidade1, "Guarani").then(
    (retorno) => retorno
  );
  console.log("Bairro criado com código:", id_bairro1);

  const id_bairro2 = await criarBairro(id_cidade1, "Recreio").then(
    (retorno) => retorno
  );
  console.log("Bairro criado com código:", id_bairro2);

  const id_bairro3 = await criarBairro(id_cidade2, "Jardins").then(
    (retorno) => retorno
  );
  console.log("Bairro criado com código:", id_bairro3);

  const id_bairro4 = await criarBairro(id_cidade2, "Pinheiros").then(
    (retorno) => retorno
  );
  console.log("Bairro criado com código:", id_bairro4);

  const id_bairro5 = await criarBairro(id_cidade3, "Alvorada").then(
    (retorno) => retorno
  );
  console.log("Bairro criado com código:", id_bairro5);

  const id_bairro6 = await criarBairro(id_cidade3, "Centro").then(
    (retorno) => retorno
  );
  console.log("Bairro criado com código:", id_bairro6);

  const id_local1 = await criarLocal(
    id_bairro1,
    "-45.458741",
    "+43.569877"
  ).then((retorno) => retorno);
  console.log("Local criado com código:", id_local1);

  const id_local2 = await criarLocal(
    id_bairro1,
    "-45.487414",
    "+43.125478"
  ).then((retorno) => retorno);
  console.log("Local criado com código:", id_local2);

  const id_local3 = await criarLocal(
    id_bairro2,
    "-14.853957",
    "-40.839598"
  ).then((retorno) => retorno);
  console.log("Local criado com código:", id_local3);

  const id_local4 = await criarLocal(
    id_bairro2,
    "-14.587412",
    "-40.698547"
  ).then((retorno) => retorno);
  console.log("Local criado com código:", id_local4);

  const id_local5 = await criarLocal(
    id_bairro3,
    "-13.112544",
    "-59.874522"
  ).then((retorno) => retorno);
  console.log("Local criado com código:", id_local5);

  const id_local6 = await criarLocal(
    id_bairro4,
    "-10.963337",
    "-40.896541"
  ).then((retorno) => retorno);
  console.log("Local criado com código:", id_local6);

  const id_local7 = await criarLocal(
    id_bairro5,
    "-90.123458",
    "-78.987541"
  ).then((retorno) => retorno);
  console.log("Local criado com código:", id_local7);

  const id_local8 = await criarLocal(
    id_bairro6,
    "-89.853957",
    "-11.147755"
  ).then((retorno) => retorno);
  console.log("Local criado com código:", id_local8);

  const id_pessoa1 = await criarPessoa({
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
  console.log("Pessoa criada com código:", id_pessoa1);

  const id_pessoa2 = await criarPessoa({
    nome: "Luiz Oliveira Nogueira",
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
  console.log("Pessoa criada com código:", id_pessoa2);

  const id_pessoa3 = await criarPessoa({
    nome: "Carlos André Neto",
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
  console.log("Pessoa criada com código:", id_pessoa3);

  const id_pessoa4 = await criarPessoa({
    nome: "Pedro Paulo Santos",
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
  console.log("Pessoa criada com código:", id_pessoa4);

  const id_pessoa5 = await criarPessoa({
    nome: "Joana Lima",
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
  console.log("Pessoa criada com código:", id_pessoa5);

  const id_pessoa6 = await criarPessoa({
    nome: "Marta Souza",
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
  console.log("Pessoa criada com código:", id_pessoa6);

  const id_pessoa7 = await criarPessoa({
    nome: "Roberto Lacerda",
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
  console.log("Pessoa criada com código:", id_pessoa7);

  const id_pessoa8 = await criarPessoa({
    nome: "Maria Pereira",
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
  console.log("Pessoa criada com código:", id_pessoa8);

  const id_desaparecimento = await criarDesaparecimento({
    cod_pessoa: id_pessoa1,
    cod_local: id_local1,
    data_desaparecimento: "01/11/2021",
    informacoes: "Saiu para comprar cigarro",
    fonte: "Mãe",
    boletim_ocorrencia: 1,
    ultima_hora_vista: "19:00:00",
  }).then((retorno) => retorno);
  console.log("Desaparecimento criado com código:", id_desaparecimento);

  const id_desaparecimento2 = await criarDesaparecimento({
    cod_pessoa: id_pessoa2,
    cod_local: id_local2,
    data_desaparecimento: "01/11/2021",
    informacoes: "Saiu para comprar cigarro",
    fonte: "Mãe",
    boletim_ocorrencia: 1,
    ultima_hora_vista: "19:00:00",
  }).then((retorno) => retorno);
  console.log("Desaparecimento criado com código:", id_desaparecimento2);

  const id_desaparecimento3 = await criarDesaparecimento({
    cod_pessoa: id_pessoa3,
    cod_local: id_local3,
    data_desaparecimento: "01/11/2021",
    informacoes: "Saiu para comprar cigarro",
    fonte: "Mãe",
    boletim_ocorrencia: 1,
    ultima_hora_vista: "19:00:00",
  }).then((retorno) => retorno);
  console.log("Desaparecimento criado com código:", id_desaparecimento3);

  const id_desaparecimento4 = await criarDesaparecimento({
    cod_pessoa: id_pessoa4,
    cod_local: id_local4,
    data_desaparecimento: "01/11/2021",
    informacoes: "Saiu para comprar cigarro",
    fonte: "Mãe",
    boletim_ocorrencia: 1,
    ultima_hora_vista: "19:00:00",
  }).then((retorno) => retorno);
  console.log("Desaparecimento criado com código:", id_desaparecimento4);

  const id_desaparecimento5 = await criarDesaparecimento({
    cod_pessoa: id_pessoa5,
    cod_local: id_local5,
    data_desaparecimento: "01/11/2021",
    informacoes: "Saiu para comprar cigarro",
    fonte: "Mãe",
    boletim_ocorrencia: 1,
    ultima_hora_vista: "19:00:00",
  }).then((retorno) => retorno);
  console.log("Desaparecimento criado com código:", id_desaparecimento5);

  const id_desaparecimento6 = await criarDesaparecimento({
    cod_pessoa: id_pessoa6,
    cod_local: id_local6,
    data_desaparecimento: "01/11/2021",
    informacoes: "Saiu para comprar cigarro",
    fonte: "Mãe",
    boletim_ocorrencia: 1,
    ultima_hora_vista: "19:00:00",
  }).then((retorno) => retorno);
  console.log("Desaparecimento criado com código:", id_desaparecimento6);

  const id_desaparecimento7 = await criarDesaparecimento({
    cod_pessoa: id_pessoa7,
    cod_local: id_local7,
    data_desaparecimento: "01/11/2021",
    informacoes: "Saiu para comprar cigarro",
    fonte: "Mãe",
    boletim_ocorrencia: 1,
    ultima_hora_vista: "19:00:00",
  }).then((retorno) => retorno);
  console.log("Desaparecimento criado com código:", id_desaparecimento7);

  const id_desaparecimento8 = await criarDesaparecimento({
    cod_pessoa: id_pessoa8,
    cod_local: id_local8,
    data_desaparecimento: "14/07/2021",
    informacoes: "Saiu para comprar cigarro",
    fonte: "Mãe",
    boletim_ocorrencia: 1,
    ultima_hora_vista: "19:00:00",
  }).then((retorno) => retorno);
  console.log("Desaparecimento criado com código:", id_desaparecimento8);
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
