# Store test project

Este projeto está dividido em duas partes, client (front end) e o server (backend).

Para ver o projeto rodando é necessario iniciar o server e o client.

## Server

O server é uma aplicação Rest API desenvolvida em Node.js que funciona como um BFF ( Backend for frontend). A aplicação tem os seguintes endpoints.

- GET - _/api/items?q=[query]_
- GET - _/api/items/:id_

### Requisitos para rodar o projeto:

- [Node.js](https://nodejs.org/en/) >= 14

### Instalação

`npm install`

### Task scripts:

- `npm start` - sobe o servidor no **localhost:3333** e escuta as mudanças e atualiza automaticamente.
- `npm build` - .
- `npm test` - roda todos os testes unitários.

## Client

Para o front end foi utilizado [Next.js](https://nextjs.org/) por ser uma solução híbrida entre client side e server side utilizando React, dessa maneira conseguimos atingir os requisitos de SEO, Performance, Acessibilidade e Escalabilidade.

Também foi utilizado [Typescript](https://www.typescriptlang.org/), e para os estilos foi utilizado [styled-components](https://styled-components.com/), porque essa tool me dá várias possibilidades com css, por exemplo, criação de temas e manter estilos dentro do escopo do componente.

## Outras tecnologias ultilizadas

- [Jest](https://jestjs.io/pt-BR/) - ferramenta de testes automatizados.
- [SWR](https://swr.vercel.app/) - library de data fetching que faz o cache de requisições http entre outras coisas.

### Requisitos para rodar o projeto:

- [Node.js](https://nodejs.org/en/) >= 14

### Instalação

`npm install`

### Task scripts:

- `npm run dev` - sobe o servidor no **localhost:3000** e escuta as mudanças e atualiza a pagina automaticamente.
- `npm run build` - constrói o aplicação de produção na pasta .next.
- `npm start` - inicia um servidor Node.js que oferece suporte a páginas híbridas, servindo páginas geradas estaticamente e renderizadas do lado do servidor.
- `npm test` - roda todos os testes unitários.
- `npm run lint` - identificar e relatar os padrões encontrados no código ECMAScript / JavaScript, com o objetivo de tornar o código mais consistente e evitar bugs.
