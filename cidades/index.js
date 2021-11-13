const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");

const server = new ApolloServer({
  ...graphql,
});

server
  .listen({ port: process.env.GRAPHQL_PORT || 4000 })
  .then(async ({ url }) => console.log({ url }));
