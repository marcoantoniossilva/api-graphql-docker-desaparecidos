const api = require("../api/");

const PORTA_API = 4003;

const MUTATION = `
mutation ($cod_cidade: Int!, $nome_bairro: String!){
  criarBairro(data:{
    cod_cidade: $cod_cidade,
    nome_bairro: $nome_bairro,
  }){
    cod_bairro
  }
}
`;

const QUERY = `
  query {
    bairros{
      cod_bairro
      cod_cidade
      nome_bairro
    }
  }
`;

const VARIABLES = `
  {
    "cod_cidade": COD_CID,
    "nome_bairro": "NOME_BAIRRO"
  }
`;

const criarBairro = async (cod_cidade, nome_bairro) => {
  const VARIABLES_BAIRRO = VARIABLES.replace("COD_CID", cod_cidade).replace(
    "NOME_BAIRRO",
    nome_bairro
  );

  if (await api.verificarAPI(PORTA_API)) {
    return await api
      .consumirAPI(MUTATION, VARIABLES_BAIRRO, PORTA_API)
      .then((retorno) => retorno.criarBairro.cod_bairro);
  } else {
    console.error("API de bairros não está no ar!");
  }
};

const listarBairros = async () => {
  if (await api.verificarAPI(PORTA_API)) {
    await api
      .consumirAPI(QUERY, "{}", PORTA_API)
      .then((retorno) => console.log(retorno.bairros));
  } else {
    console.error("API de bairros não está no ar!");
  }
};

module.exports = {
  criarBairro,
  listarBairros,
};
