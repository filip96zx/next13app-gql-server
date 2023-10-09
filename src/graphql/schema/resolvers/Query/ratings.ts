import type { QueryResolvers } from './../../../types.generated';
export const ratings: NonNullable<QueryResolvers['ratings']> = async (
	_parent,
	arg,
	ctx
) => {
	const { where, first, skip } = arg;
	const ratings = await ctx.prisma.rating.findMany({
		where: { productId: where?.productId || undefined },
		skip: skip ?? undefined,
		take: first ?? undefined,
		orderBy: { createdAt: 'desc' }
	});

	return ratings;
};
