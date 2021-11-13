const db = require("../db");
const { serviceIsAlive } = require("../status/index.js");

module.exports = {
  Query: {
    pessoas: async () => await db("pessoas"),
    pessoa: async (_, { cod_pessoa }) =>
      await db("pessoas").where({ cod_pessoa }).first(),
    isAlive: () => serviceIsAlive(),
  },
  Mutation: {
    criarPessoa: async (_, { data }) =>
      (await db("pessoas").insert(data).returning("*"))[0],
    criarPessoas: async (_, { data }) =>
      await db("pessoas").insert(data).returning("*"),
    atualizarPessoa: async (_, { cod_pessoa, data }) =>
      await db("pessoas").where({ cod_pessoa }).update(data),
    deletarPessoa: async (_, { cod_pessoa }) => {
      await db("pessoas").where({ cod_pessoa: cod_pessoa }).delete();
    },
  },
};
