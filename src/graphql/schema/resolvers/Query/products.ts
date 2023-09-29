import { Prisma } from '@prisma/client';
import type {
	InputMaybe,
	ProductWhereInput,
	QueryResolvers
} from './../../../types.generated';

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
export const products: NonNullable<
	QueryResolvers['products']
> = async (_parent, arg, ctx) => {
	const { where, skip, first } = arg;

	const products = await ctx.prisma.product.findMany({
		include: {
			categories: { include: { category: true } },
			collections: { include: { collection: true } }
		},
		...(where && {
			where: getProductWhereParams(where)
		}),
		skip: skip ?? undefined,
		take: first ?? undefined
	});
	return products.map((product) => ({
		...product,
		categories: product.categories.map(
			(category) => category.category
		),
		collections: product.collections.map(
			(collection) => collection.collection
		)
	}));
};
