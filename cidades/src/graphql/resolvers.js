const db = require("../db");
const { serviceIsAlive } = require("../status/index.js");

module.exports = {
  Query: {
    cidades: async () => await db("cidades"),
    cidadesPorUf: async (_, { cod_uf }) =>
      await db("cidades").where({ cod_uf }),
    cidadeComMaisOcorrencias: async () => {
      const {
        rows: [result],
      } = await db.raw(
        `select c.nome_cidade nome, count(*) total
        from cidades c join bairros b on c.cod_cidade = b.cod_cidade 
        join locais l on b.cod_bairro = l.cod_bairro 
        join desaparecimentos d on l.cod_local = d.cod_local
        group by c.cod_cidade
        ORDER BY COUNT(*) DESC LIMIT 1`
      );
      return result;
    },
    isAlive: () => serviceIsAlive(),
    cidade: async (_, { cod_cidade }) =>
      await db("cidades").where({ cod_cidade }).first(),
    isAlive: () => serviceIsAlive(),
  },
  Mutation: {
    criarCidade: async (_, { data }) =>
      (await db("cidades").insert(data).returning("*"))[0],
    criarCidades: async (_, { data }) =>
      await db("cidades").insert(data).returning("*"),
    atualizarCidade: async (_, { cod_cidade, data }) =>
      await db("cidades").where({ cod_cidade }).update(data),
    deletarCidade: async (_, { cod_cidade }) => {
      await db("cidades").where({ cod_cidade: cod_cidade }).delete();
    },
  },
};
