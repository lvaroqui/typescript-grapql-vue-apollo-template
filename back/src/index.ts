import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import { createConnection } from 'typeorm';

import resolvers from './resolver';
import { authenticate } from './resolver/UserResolver';
import typeDefs from './schema';

(async function () {
  await createConnection();
})();

const app = new Koa();
app.proxy = true;

if (app.env != 'development') {
  app.use(helmet());
}

app.use(bodyParser());

app.use(authenticate);

// GraphQL
const server = new ApolloServer({
  typeDefs,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolvers: resolvers as any,
  context: ({ ctx }) => ({ ctx }),
});
app.use(server.getMiddleware({ path: '/graphql' }));

app.listen(3001, async () => {
  console.log('Listening on port 3001');
});
