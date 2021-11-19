# api-graph-docker-desaparecidos

Api de microsserviços [GraphQL](https://graphql.org/) sobre desaparecimentos desenvolvida em [javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) com uso do [Apollo Server](https://www.apollographql.com/docs/apollo-server/), [PostgreSQL](https://www.postgresql.org/) e [Knex](https://knexjs.org/) utilizando conteinerização [Docker](https://github.com/docker).

<br/>

## Requisitos

- [Docker](https://docs.docker.com/)

<br/>

## 1 - Crie os contêineres com o docker-compose

Na pasta do projeto execute:

```bash
docker-compose up --build
```

<br/>

## 2 - Acesse os serviços pelo seu _endpoint_

- ufs: http://localhost:4001/
- cidades: http://localhost:4002/
- bairros: http://localhost:4003/
- locais: http://localhost:4004/
- pessoas: http://localhost:4005/
- desaparecimentos: http://localhost:4006/

<br/>

## 3 - Teste os serviços

Cada serviço possui uma _Query_ chamada "isAlive" que serve para verificar se o serviço está no ar. Para verificar o status de um serviço, conecte no GraphQL Playground acessível pelas URL's acima e então execute a consulta:

```
query{
    isAlive
}
```

O resultado deve ser como o abaixo:

```json
"data": {
    "isAlive": true
}
```

Pronto! API GraphQL de desaparecimentos configurada com êxito!

## 4 - Testar operações dos serviços (Opcional)

### Requisitos

- [Node](https://github.com/nodejs/node)
- [Npm](https://github.com/npm/npm) ou [Yarn](https://github.com/yarnpkg/yarn)

<br>

Se desejar realizar um teste das operações de criação e listagem de todas de todos os serviços, basta navegar até a pasta [testeAPI](testeAPI/) e instalar as dependências:

### 4.1 - Instalar as dependências

Na pasta do projeto execute (npm):

```bash
npm install
```

ou (yarn)

```bash
yarn
```

<br/>

### 4.2 - Executar o teste da API

```bash
node index.js
```

Então, deverá ser exibido na saída do console as listagens de cada entidade antes e depois da criação.
