# Typescript GraphQL Vue Apollo Template

## What is this?

This is a starter template for GrapQL fullstack application using the following technologies:

- [Typescript](https://www.typescriptlang.org/), a type safe version of Javascript to increase confidence in your code.
- [Vue.js 3](https://v3.vuejs.org/), an amazing front-end framework to design modern UIs.
- [Vite](https://github.com/vitejs/vite), a fast development server for the front-end with HMR (Hot Module Replacement).
- [Node.js](https://nodejs.org/en/) with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) (on top of [Koa](https://koajs.com/)), a stack for back-end development of a GraphQL server.
- [PostgreSQL](https://www.postgresql.org/) database.
- [TypeORM](https://typeorm.io/#/), an Object Relational Mapping for Javascript.
- [GrapQL Code Gen](https://www.graphql-code-generator.com/), a tool to generate GraphQL resolvers and operations from your GraphQL schemas.

The project relies on [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) for its development environnement. The compose file defines 4 services:

- db: the PostgreSQL database.
- back: the back-end server.
- front: the front-end dev server.
- nginx: a self-signed reverse proxy for easy development without worrying about http vs https issue and CORS.

Simply run the command `docker-compose up` to run dev servers and have everything setup for you.

Once docker containers are built, navigate to:

- https://localhost to access Vite front-end dev server with HMR.
- https://localhost/graphql to access back-end server. Navigating to this route in your browser gives access to the Apollo GraphQL dev-tool which provide request design tools.

A basic login is implemented to serve as an example. However there is no register, so to test it you have to register via the graphql route and issue a GraphQL request looking like that:

```graphql
mutation {
  register(
    email: "your.email@example.com"
    username: "anonymous"
    password: "verystrongpassword"
  ) {
    id
    email
    username
  }
}
```

The project relies on GraphQL Code Generation to create resolvers and graphql-request automatically. The generation is automatically done when the schema are updated.

## Disclaimer

I did this template on my freetime to have a common base for my various web project ideas. I am not a professional web developper, feel free to suggest any improvement via PR or creating an issue.
