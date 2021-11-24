const db = require("../db");
const { serviceIsAlive } = require("../status/index.js");

module.exports = {
  Query: {
    ufs: async () => await db("ufs"),
    uf: async (_, { cod_uf }) => await db("ufs").where({ cod_uf }).first(),
    isAlive: () => serviceIsAlive(),
  },
  Mutation: {
    criarUf: async (_, sigla) =>
      (await db("ufs").insert(sigla).returning("*"))[0],
    criarUfs: async (_, { data }) =>
      await db("ufs").insert(data).returning("*"),
    atualizarUf: async (_, { cod_uf, data }) =>
      await db("ufs").where({ cod_uf }).update(data),
    deletarUf: async (_, { filtro: { cod_uf, sigla } }) => {
      if (cod_uf) {
        return await db("ufs").where({ cod_uf }).delete();
      }
      if (sigla) {
        return await db("ufs").where({ sigla }).delete();
      }
      throw new Error("Favor passar um parâmetro!");
    },
  },
};
