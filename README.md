# Typescript Graphql Vue Apollo Template

## What is this?

This is a starter template for GrapQL fullstack application using the following technologies:

- [Typescript](https://www.typescriptlang.org/)
- [Vue.js 3](https://v3.vuejs.org/) with [Vite](https://github.com/vitejs/vite)
- [Node.js](https://nodejs.org/en/) [Apollo Server](https://www.apollographql.com/docs/apollo-server/) (on top of [Koa](https://koajs.com/))
- [PostgreSQL](https://www.postgresql.org/) database
- [TypeORM](https://typeorm.io/#/)
- [GrapQL Code Gen](https://www.graphql-code-generator.com/)

The project relies on [Docker]() for its development environnement. It provides a self-signed reverse proxy for easy development.

Simply run the command `docker-compose up` to run dev servers and have everything setup for you.

Once docker containers are built, navigate to:

- https://localhost to access Vite front end dev server with HMR
- https://localhost/graphql to access backend server

A basic login is implemented to serve as an example.

The project relies on GraphQL Code Generation to create resolvers and graphql-request automatically. The generation is automatically done when the schema are updated.

## Disclaimer

I did this template on my freetime to have a common base for my various web project ideas. I am not a professional web developper, feel free to suggest any improvement via PR or creating an issue.
