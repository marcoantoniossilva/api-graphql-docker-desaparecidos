const api = require("../api/");

const PORTA_API = 4004;

const MUTATION = `
mutation ($cod_bairro: Int!, $latitude: String!, $longitude: String!){
  criarLocal(data:{
    cod_bairro: $cod_bairro,
    latitude: $latitude,
    longitude: $longitude
  }){
    cod_local
  }
}
`;

const QUERY = `
  query {
    locais{
      cod_local
      cod_bairro
      latitude
      longitude
    }
  }
`;

const VARIABLES = `
  {
    "cod_bairro": COD_BAI,
    "latitude": "LATITUDE_BAI",
    "longitude": "LONGITUDE_BAI"
  }
`;

const criarLocal = async (cod_bairro, latitude, longitude) => {
  const VARIABLES_LOCAL = VARIABLES.replace("COD_BAI", cod_bairro)
    .replace("LATITUDE_BAI", latitude)
    .replace("LONGITUDE_BAI", longitude);

  if (await api.verificarAPI(PORTA_API)) {
    return await api
      .consumirAPI(MUTATION, VARIABLES_LOCAL, PORTA_API)
      .then((retorno) => retorno.criarLocal.cod_local);
  } else {
    console.error("API de locais não está no ar!");
  }
};

const listarLocais = async () => {
  if (await api.verificarAPI(PORTA_API)) {
    await api
      .consumirAPI(QUERY, "{}", PORTA_API)
      .then((retorno) => console.log(retorno.locais));
  } else {
    console.error("API de locais não está no ar!");
  }
};

module.exports = {
  criarLocal,
  listarLocais,
};
