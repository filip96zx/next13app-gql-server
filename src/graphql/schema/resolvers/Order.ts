import type { OrderResolvers } from './../../types.generated';
export const Order: OrderResolvers = {
	/* Implement Order resolver logic here */
	items: async (parent, args, ctx) => {
		const { first, skip } = args;
		const result = await ctx.prisma.order.findUnique({
			where: { id: parent.id },
			include: {
				items: { skip: skip || undefined, take: first || undefined }
			}
		});

		return result?.items ?? [];
	}
};
