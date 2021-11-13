const db = require("../db");
const { serviceIsAlive } = require("../status/index.js");

module.exports = {
  Query: {
    bairros: async () => await db("bairros"),
    bairro: async (_, { cod_bairro }) =>
      await db("bairros").where({ cod_bairro }).first(),
    isAlive: () => serviceIsAlive(),
  },
  Mutation: {
    criarBairro: async (_, { data }) =>
      (await db("bairros").insert(data).returning("*"))[0],
    criarBairros: async (_, { data }) =>
      await db("bairros").insert(data).returning("*"),
    atualizarBairro: async (_, { cod_bairro, data }) =>
      await db("bairros").where({ cod_bairro }).update(data),
    deletarBairro: async (_, { cod_bairro }) => {
      await db("bairros").where({ cod_bairro: cod_bairro }).delete();
    },
  },
};
