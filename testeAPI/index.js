const db = require("./db");
const { listarUfComMaisOcorrencias } = require("./uf");
const { listarCidadeComMaisOcorrencias } = require("./cidade");
const {
  listarProporcaoDeOcorrencias,
  listarTotalDeOcorrencias,
  criarDesaparecimento,
} = require("./desaparecimento");

async function criacao() {
  await db.migrate
    .latest(db.client.config.migrations.directory)
    .then(([batchNo, log]) => {
      if (!log.length) {
        console.info("\nBanco de dados já está atualizado");
      } else {
        console.info("\nExecutou as migrations: " + log.join(", "));
      }
      db.destroy();
    });
}

async function listagem() {
  console.log("\nAPI de Desaparecimentos: ");
  await listarTotalDeOcorrencias();
  console.log("\nAPI de Ufs: ");
  await listarUfComMaisOcorrencias();
  console.log("\nAPI de Cidades: ");
  await listarCidadeComMaisOcorrencias();
  console.log("\nAPI de Desaparecimentos: ");
  await listarProporcaoDeOcorrencias();
}

(async () => {
  await listagem();
  await criacao();
  await listagem();
})();
