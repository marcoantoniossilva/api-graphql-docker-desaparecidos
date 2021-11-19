const api = require("../api/");

const PORTA_API = 4005;

const MUTATION = `
mutation(
  $nome: String!,
  $data_nasc: String!,
  $imagem: String!,
  $sexo:String!,
  $cor_olhos:String!,
  $cor_pele:String!,
  $cor_cabelo:String!,
  $peso_aproximado:Float!,
  $altura_aproximada:Float!,
  $tipo_fisico:String!,
  $transtorno_mental:String!,
  $marca_caracteristica:String!
){
  criarPessoa(data:{
    nome: $nome,
    data_nascimento: $data_nasc,
    imagem: $imagem,
    sexo: $sexo,
    cor_olhos: $cor_olhos,
    cor_pele: $cor_pele,
    cor_cabelo: $cor_cabelo,
    peso_aproximado: $peso_aproximado,
    altura_aproximada: $altura_aproximada,
    tipo_fisico: $tipo_fisico,
    transtorno_mental: $transtorno_mental,
    marca_caracteristica: $marca_caracteristica
  }){
    cod_pessoa
  }
}
`;

const QUERY = `
  query {
    pessoas{
      cod_pessoa
      nome
      data_nascimento
      imagem
      sexo
      cor_olhos
      cor_pele
      cor_cabelo
      peso_aproximado
      altura_aproximada
      tipo_fisico
      transtorno_mental
    }
  }
`;

const VARIABLES = `
  {
    "nome": "NOME_PES",
    "data_nasc": "DATA_NASC_PES",
    "imagem": "IMAGEM_PES",
    "sexo":"SEXO_PES",
    "cor_olhos":"COR_OLHOS_PES",
    "cor_pele":"COR_PELE_PES",
    "cor_cabelo":"COR_CABELO_PES",
    "peso_aproximado": PESO_APROXIMADO_PES,
    "altura_aproximada": ALTURA_APROXIMADA_PES,
    "tipo_fisico":"TIPO_FISICO_PES",
    "transtorno_mental":"TRANSTORNO_MENTAL_PES",
    "marca_caracteristica":"MARCA_CARACTERISTICA_PES"
  }
`;

const criarPessoa = async (dados_pessoa) => {
  const {
    nome,
    data_nascimento,
    imagem,
    sexo,
    cor_olhos,
    cor_pele,
    cor_cabelo,
    peso_aproximado,
    altura_aproximada,
    tipo_fisico,
    transtorno_mental,
    marca_caracteristica,
  } = dados_pessoa;

  const VARIABLES_PESSOA = VARIABLES.replace("NOME_PES", nome)
    .replace("DATA_NASC_PES", data_nascimento)
    .replace("IMAGEM_PES", imagem)
    .replace("SEXO_PES", sexo)
    .replace("COR_OLHOS_PES", cor_olhos)
    .replace("COR_PELE_PES", cor_pele)
    .replace("COR_CABELO_PES", cor_cabelo)
    .replace("PESO_APROXIMADO_PES", peso_aproximado)
    .replace("ALTURA_APROXIMADA_PES", altura_aproximada)
    .replace("TIPO_FISICO_PES", tipo_fisico)
    .replace("TRANSTORNO_MENTAL_PES", transtorno_mental)
    .replace("MARCA_CARACTERISTICA_PES", marca_caracteristica);

  if (await api.verificarAPI(PORTA_API)) {
    return await api
      .consumirAPI(MUTATION, VARIABLES_PESSOA, PORTA_API)
      .then((retorno) => retorno.criarPessoa.cod_pessoa);
  } else {
    console.error("API de pessoas não está no ar!");
  }
};

const listarPessoas = async () => {
  if (await api.verificarAPI(PORTA_API)) {
    return await api
      .consumirAPI(QUERY, "{}", PORTA_API)
      .then((retorno) => console.log(retorno.pessoas));
  } else {
    console.error("API de pessoas não está no ar!");
  }
};

module.exports = {
  criarPessoa,
  listarPessoas,
};
