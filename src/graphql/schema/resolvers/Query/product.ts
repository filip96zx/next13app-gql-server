import { parseProductToProductWithNotNullableLists } from 'graphql/schema/resolvers/Query/shared/product.utils';
import type { QueryResolvers } from 'graphql/types.generated';
export const product: NonNullable<QueryResolvers['product']> = async (
	_parent,
	arg,
	ctx
) => {
	const product = await ctx.prisma.product.findUnique({
		where: {
			id: arg.id
		}
	});
	if (!product) {
		return null;
	}

	return parseProductToProductWithNotNullableLists(product);
};
