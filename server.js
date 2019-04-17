const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

require('dotenv').config();
import apis from './datasources';
import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schemas/schema';

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      schedulesAPI: new apis.schedulesAPI(),
      rulesAPI: new apis.rulesAPI(),
    }),
  });

  server.listen(process.env.APP_PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
