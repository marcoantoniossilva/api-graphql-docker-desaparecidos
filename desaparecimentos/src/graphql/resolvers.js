const db = require("../db");
const { serviceIsAlive } = require("../status/index.js");

module.exports = {
  Query: {
    desaparecimentos: async () => await db("desaparecimentos"),
    desaparecimentosPorLocal: async (_, { cod_local }) =>
      await db("desaparecimentos").where({ cod_local }),
    desaparecimentosCriancaAdulto: async () => {
      const {
        rows: [result],
      } = await db.raw(
        `select  count(*) as criancas, (select  count(*)
        from desaparecimentos d
        join pessoas p on d.cod_pessoa = p.cod_pessoa
        where p.data_nascimento < now()- INTERVAL '12 year') as adultos
        from desaparecimentos d
        join pessoas p on d.cod_pessoa = p.cod_pessoa
        where p.data_nascimento > now()- INTERVAL '12 year';`
      );
      return result;
    },
    desaparecimento: async (_, { filtro }) => {
      if (filtro.cod_desaparecimento) {
        return await db("desaparecimentos")
          .where({ cod_desaparecimento: filtro.cod_desaparecimento })
          .first();
      }
      if (filtro.cod_pessoa) {
        return await db("desaparecimentos")
          .where({ cod_pessoa: filtro.cod_pessoa })
          .first();
      }
      throw new Error("Favor passar um parâmetro!");
    },
    desaparecimentosTotais: async () =>
      await db("desaparecimentos")
        .count("cod_desaparecimento as total")
        .first(),
    isAlive: () => serviceIsAlive(),
  },
  Mutation: {
    criarDesaparecimento: async (_, { data }) =>
      (await db("desaparecimentos").insert(data).returning("*"))[0],
    criarDesaparecimentos: async (_, { data }) =>
      await db("desaparecimentos").insert(data).returning("*"),
    atualizarDesaparecimento: async (_, { cod_desaparecimento, data }) =>
      await db("desaparecimentos").where({ cod_desaparecimento }).update(data),
    deletarDesaparecimento: async (_, { cod_desaparecimento }) => {
      await db("desaparecimentos")
        .where({ cod_desaparecimento: cod_desaparecimento })
        .delete();
    },
  },
};
