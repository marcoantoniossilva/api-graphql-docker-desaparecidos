const api = require("../api/");

const PORTA_API = 4002;

const MUTATION = `
mutation ($cod_uf: Int!, $nome_cidade: String!){
  criarCidade(data:{
    cod_uf: $cod_uf,
    nome_cidade: $nome_cidade,
  }){
    cod_cidade
  }
}
`;

const QUERY = `
  query {
    cidades{
      cod_cidade
      cod_uf
      nome_cidade
    }
  }
`;

const QUERY_CIDADE_COM_MAIS_OCORRENCIAS = `
  query {
    cidadeComMaisOcorrencias{
      nome
      total
    }
  }
`;

const VARIABLES = `
  {
    "cod_uf": COD_UF,
    "nome_cidade": "NOME_CID"
  }
`;

const criarCidade = async (cod_uf, nome_cidade) => {
  const VARIABLES_CIDADE = VARIABLES.replace("COD_UF", cod_uf).replace(
    "NOME_CID",
    nome_cidade
  );

  if (await api.verificarAPI(PORTA_API)) {
    return await api
      .consumirAPI(MUTATION, VARIABLES_CIDADE, PORTA_API)
      .then((retorno) => retorno.criarCidade.cod_cidade);
  } else {
    console.error("API de cidades não está no ar!");
  }
};

const listarCidades = async () => {
  if (await api.verificarAPI(PORTA_API)) {
    await api
      .consumirAPI(QUERY, "{}", PORTA_API)
      .then((retorno) => console.log(retorno.cidades));
  } else {
    console.error("API de cidades não está no ar!");
  }
};

const listarCidadeComMaisOcorrencias = async () => {
  if (await api.verificarAPI(PORTA_API)) {
    await api
      .consumirAPI(QUERY_CIDADE_COM_MAIS_OCORRENCIAS, "{}", PORTA_API)
      .then((retorno) => {
        const { nome, total } = retorno.cidadeComMaisOcorrencias || {
          nome: "Nenhuma",
          total: 0,
        };
        console.log("CIDADE COM MAIS OCORRÊNCIAS");
        console.log("NOME:", nome);
        console.log("QUANTIDADE:", total);
      });
  } else {
    console.error("API de cidades não está no ar!");
  }
};

module.exports = {
  criarCidade,
  listarCidades,
  listarCidadeComMaisOcorrencias,
};
