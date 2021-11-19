const axios = require("axios");

const consumirAPI = async (consulta, variaveis, porta) => {
  return axios
    .post(`http://localhost:${porta}/`, {
      query: consulta,
      variables: variaveis,
    })
    .then((retorno) => retorno.data.data)
    .catch((erro) => console.error(erro));
};

const verificarAPI = async (porta) => {
  return await consumirAPI("query { isAlive }", null, porta).then(
    (retorno) => retorno.isAlive == true
  );
};

module.exports = {
  verificarAPI,
  consumirAPI,
};
