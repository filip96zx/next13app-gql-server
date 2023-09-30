import { updateCart } from 'graphql/schema/resolvers/Mutation/shared/cart.utils';
import type { MutationResolvers } from 'graphql/types.generated';
export const cartIncrement: NonNullable<
	MutationResolvers['cartIncrement']
> = async (_parent, arg, _ctx) => {
	const { items, id } = arg;

	return await updateCart({
		cartId: id,
		items,
		updateMethod: 'increment'
	});
};
