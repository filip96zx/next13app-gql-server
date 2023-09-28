import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/typeDefs.generated.js';
import { resolvers } from './graphql/resolvers.generated.js';
import { prisma } from 'db';

const server = new ApolloServer({
	typeDefs,
	resolvers
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
	context: async () => {
		return { prisma };
	}
});

console.log(`🚀  Server ready at: ${url}`);
