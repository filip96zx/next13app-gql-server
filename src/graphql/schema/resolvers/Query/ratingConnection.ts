import type { QueryResolvers } from './../../../types.generated';
export const ratingConnection: NonNullable<
	QueryResolvers['ratingConnection']
> = async (_parent, arg, ctx) => {
	const { where } = arg;
	const count = await ctx.prisma.rating.count({
		where: { productId: where?.productId || undefined }
	});

	return {
		aggregate: {
			count
		}
	};
};
