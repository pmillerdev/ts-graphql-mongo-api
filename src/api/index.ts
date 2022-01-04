import { ApolloServer } from "apollo-server";
import { getConnection } from "../database";

import typeDefs from "../graphql/schema";
import resolvers from "../graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    const dbConn = await getConnection();

    return { dbConn };
  },
});

const port = 3000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
