import { updateOrderItems } from 'graphql/schema/resolvers/Mutation/shared/order.utils';
import type { MutationResolvers } from 'graphql/types.generated';
export const orderItemsIncrement: NonNullable<
	MutationResolvers['orderItemsIncrement']
> = async (_parent, arg, _ctx) => {
	const { items, id } = arg;

	return await updateOrderItems({
		cartId: id,
		items,
		updateMethod: 'increment'
	});
};
