const db = require("../db");
const { serviceIsAlive } = require("../status/index.js");

module.exports = {
  Query: {
    cidades: async () => await db("cidades"),
    cidadesPorUf: async (_, { cod_uf }) =>
      await db("cidades").where({ cod_uf }),
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
