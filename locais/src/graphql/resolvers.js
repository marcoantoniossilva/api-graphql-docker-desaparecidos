const db = require("../db");
const { serviceIsAlive } = require("../status/index.js");

module.exports = {
  Query: {
    locais: async () => await db("locais"),
    locaisPorBairro: async (_, { cod_bairro }) =>
      await db("locais").where({ cod_bairro }),
    local: async (_, { cod_local }) =>
      await db("locais").where({ cod_local }).first(),
    isAlive: () => serviceIsAlive(),
  },
  Mutation: {
    criarLocal: async (_, { data }) =>
      (await db("locais").insert(data).returning("*"))[0],
    criarLocais: async (_, { data }) =>
      await db("locais").insert(data).returning("*"),
    atualizarLocal: async (_, { cod_local, data }) =>
      await db("locais").where({ cod_local }).update(data),
    deletarLocal: async (_, { cod_local }) => {
      await db("locais").where({ cod_local: cod_local }).delete();
    },
  },
};
