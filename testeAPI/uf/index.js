const api = require("../api/");

const PORTA_API = 4001;

const MUTATION = `
  mutation ($sigla: String!) {
    criarUf(sigla: $sigla){
      cod_uf
    }
  }
`;

const QUERY = `
  query {
    ufs{
      cod_uf
      sigla
    }
  }
`;

const VARIABLES = `
  {
    "sigla": "SIGLA_UF"
  }
`;

const criarUf = async (sigla) => {
  const VARIABLES_UF = VARIABLES.replace("SIGLA_UF", sigla);

  if (await api.verificarAPI(PORTA_API)) {
    return await api
      .consumirAPI(MUTATION, VARIABLES_UF, PORTA_API)
      .then((retorno) => retorno.criarUf.cod_uf);
  } else {
    console.error("API de ufs não está no ar!");
  }
};

const listarUfs = async () => {
  if (await api.verificarAPI(PORTA_API)) {
    await api
      .consumirAPI(QUERY, "{}", PORTA_API)
      .then((retorno) => console.log(retorno.ufs));
  } else {
    console.error("API de ufs não está no ar!");
  }
};

module.exports = {
  criarUf,
  listarUfs,
};
