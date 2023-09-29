import type { QueryResolvers } from 'graphql/types.generated';
export const category: NonNullable<
	QueryResolvers['category']
> = async (_parent, arg, ctx) => {
	const category = await ctx.prisma.category.findUnique({
		where: { id: arg.id }
	});
	return category;
};
