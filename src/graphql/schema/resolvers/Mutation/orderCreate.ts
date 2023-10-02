import { getValidOrderItemsInput } from 'graphql/schema/resolvers/Mutation/shared/order.utils';
import type { MutationResolvers } from 'graphql/types.generated';
export const orderCreate: NonNullable<
	MutationResolvers['orderCreate']
> = async (_parent, arg, ctx) => {
	const { items } = arg;

	const newCart = await ctx.prisma.order.create({
		data: {
			status: 'DRAFT',
			items: {
				create: await getValidOrderItemsInput(items)
			},
			totalItems: items.reduce((acc, item) => acc + item.quantity, 0)
		}
	});

	return { ...newCart, items: [] };
};
