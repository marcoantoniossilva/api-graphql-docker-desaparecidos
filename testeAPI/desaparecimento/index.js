const api = require("../api/");

const PORTA_API = 4006;

const MUTATION = `
mutation (
  $cod_pessoa: Int!,
  $cod_local: Int!,
  $data_desaparecimento: String!,
  $informacoes:String!,
  $fonte:String!,
  $boletim_ocorrencia:Int!,
  $ultima_hora_vista:String!,
){
  criarDesaparecimento(data:{
    cod_pessoa: $cod_pessoa,
    cod_local: $cod_local,
    data_desaparecimento: $data_desaparecimento,
    informacoes: $informacoes,
    fonte: $fonte,
    boletim_ocorrencia: $boletim_ocorrencia,
    ultima_hora_vista: $ultima_hora_vista,
  }){
    cod_desaparecimento
  }
}
`;

const QUERY = `
  query {
    desaparecimentos{
      cod_desaparecimento
      cod_pessoa
      cod_local
      data_desaparecimento
      informacoes
      fonte
      boletim_ocorrencia
      ultima_hora_vista    
    }
  }
`;

const VARIABLES = `
  {
    "cod_pessoa": COD_PESSOA_DES,
    "cod_local": COD_LOCAL_DES,
    "data_desaparecimento": "DATA_DESAPARECIMENTO_DES",
    "informacoes":"INFORMACOES_DES",
    "fonte":"FONTE_DES",
    "boletim_ocorrencia": BOLETIM_OCORRENCIA_DES,
    "ultima_hora_vista":"ULTIMA_HORA_VISTA_DES"
  }
`;

const criarDesaparecimento = async (dados_desaparecimento) => {
  const {
    cod_pessoa,
    cod_local,
    data_desaparecimento,
    informacoes,
    fonte,
    boletim_ocorrencia,
    ultima_hora_vista,
  } = dados_desaparecimento;

  const VARIABLES_DESAPARECIMENTO = VARIABLES.replace(
    "COD_PESSOA_DES",
    cod_pessoa
  )
    .replace("COD_LOCAL_DES", cod_local)
    .replace("DATA_DESAPARECIMENTO_DES", data_desaparecimento)
    .replace("INFORMACOES_DES", informacoes)
    .replace("FONTE_DES", fonte)
    .replace("BOLETIM_OCORRENCIA_DES", boletim_ocorrencia)
    .replace("ULTIMA_HORA_VISTA_DES", ultima_hora_vista);

  if (await api.verificarAPI(PORTA_API)) {
    return await api
      .consumirAPI(MUTATION, VARIABLES_DESAPARECIMENTO, PORTA_API)
      .then((retorno) => retorno.criarDesaparecimento.cod_desaparecimento);
  } else {
    console.error("API de desaparecimentos não está no ar!");
  }
};

const listarDesaparecimentos = async () => {
  if (await api.verificarAPI(PORTA_API)) {
    return await api
      .consumirAPI(QUERY, "{}", PORTA_API)
      .then((retorno) => console.log(retorno.desaparecimentos));
  } else {
    console.error("API de desaparecimentos não está no ar!");
  }
};

module.exports = {
  criarDesaparecimento,
  listarDesaparecimentos,
};
