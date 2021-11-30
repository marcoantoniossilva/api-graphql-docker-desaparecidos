exports.up = function (knex) {
  return knex("ufs").insert([
    { cod_uf: 1, sigla: "AC" },
    { cod_uf: 2, sigla: "AL" },
    { cod_uf: 3, sigla: "AP" },
    { cod_uf: 4, sigla: "AM" },
    { cod_uf: 5, sigla: "BA" },
    { cod_uf: 6, sigla: "CE" },
    { cod_uf: 7, sigla: "DF" },
    { cod_uf: 8, sigla: "ES" },
    { cod_uf: 9, sigla: "GO" },
    { cod_uf: 10, sigla: "MA" },
    { cod_uf: 11, sigla: "MT" },
    { cod_uf: 12, sigla: "MS" },
    { cod_uf: 13, sigla: "MG" },
    { cod_uf: 14, sigla: "PA" },
    { cod_uf: 15, sigla: "PB" },
    { cod_uf: 16, sigla: "PR" },
    { cod_uf: 17, sigla: "PE" },
    { cod_uf: 18, sigla: "PI" },
    { cod_uf: 19, sigla: "RR" },
    { cod_uf: 20, sigla: "RO" },
    { cod_uf: 21, sigla: "RJ" },
    { cod_uf: 22, sigla: "RN" },
    { cod_uf: 23, sigla: "RS" },
    { cod_uf: 24, sigla: "SC" },
    { cod_uf: 25, sigla: "SP" },
    { cod_uf: 26, sigla: "SE" },
    { cod_uf: 27, sigla: "TO" },
  ]);
};

exports.down = function (knex) {
  return knex("ufs").del();
};
