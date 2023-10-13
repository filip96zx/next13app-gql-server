import { Prisma } from '@prisma/client';
import { parseProductToProductWithNotNullableLists } from 'graphql/schema/resolvers/shared/product.utils';
import type {
	InputMaybe,
	ProductWhereInput,
	QueryResolvers
} from 'graphql/types.generated';
import { getData } from 'type-sense';

export const getProductWhereParams = (
	where?: InputMaybe<ProductWhereInput>
): Prisma.ProductWhereInput | undefined => {
	if (!where) return undefined;
	const {
		categories_some,
		collections_some,
		excludedIds,
		nameContains
	} = where;

	return {
		name: {
			contains: nameContains || undefined,
			mode: 'insensitive'
		},
		categories: {
			some: {
				category: {
					slug: categories_some?.slug || undefined
				}
			}
		},
		collections: {
			some: {
				collection: {
					slug: collections_some?.slug || undefined
				}
			}
		},
		AND: {
			id: {
				notIn: excludedIds || undefined
			}
		}
	};
};
export const productsRelated: NonNullable<
	QueryResolvers['productsRelated']
> = async (_parent, arg, ctx) => {
	const { where, skip, first, orderBy } = arg;
	const products = await ctx.prisma.product.findMany();

	getData({ products, query: where?.nameContains! });
	return products.map(parseProductToProductWithNotNullableLists);
};
