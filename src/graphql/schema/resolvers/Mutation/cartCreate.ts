import { getValidOrderItemsInput } from 'graphql/schema/resolvers/Mutation/shared/cart.utils';
import type { MutationResolvers } from 'graphql/types.generated';
export const cartCreate: NonNullable<
	MutationResolvers['cartCreate']
> = async (_parent, arg, ctx) => {
	const { items } = arg;

	const newCart = await ctx.prisma.order.create({
		data: {
			status: 'DRAFT',
			items: {
				create: await getValidOrderItemsInput(items)
			}
		}
	});

	return { ...newCart, items: [] };
};
