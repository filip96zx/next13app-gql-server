import type { MutationResolvers } from './../../../types.generated';
export const orderUpdateStatus: NonNullable<
	MutationResolvers['orderUpdateStatus']
> = async (_parent, arg, ctx) => {
	const { id, status } = arg;
	const result = await ctx.prisma.order.update({
		where: { id },
		data: { status }
	});

	if (!result) {
	}
	return { ...result, items: [] };
};
