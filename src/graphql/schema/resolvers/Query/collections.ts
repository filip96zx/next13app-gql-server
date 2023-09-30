import type { QueryResolvers } from 'graphql/types.generated';
export const collections: NonNullable<
	QueryResolvers['collections']
> = async (_parent, arg, ctx) => {
	const { skip, first } = arg;
	const collections = await ctx.prisma.collection.findMany({
		skip: skip ?? undefined,
		take: first ?? undefined
	});

	return collections.map((c) => ({
		...c,
		products: [],
		images: []
	}));
};
