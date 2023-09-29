import type { QueryResolvers } from 'graphql/types.generated';
export const collectionsConnection: NonNullable<
	QueryResolvers['collectionsConnection']
> = async (_parent, arg, ctx) => {
	const count = await ctx.prisma.collection.count();

	return {
		aggregate: {
			count
		}
	};
};
