import { Prisma } from '@prisma/client';
import type {
	InputMaybe,
	ProductWhereInput,
	QueryResolvers
} from './../../../types.generated';

export const getWhereParams = (
	where: InputMaybe<ProductWhereInput>
): Prisma.ProductWhereInput => {
	return {
		...(where?.nameContains && {
			name: {
				contains: where.nameContains,
				mode: 'insensitive'
			}
		}),
		...(where?.categories_some?.slug && {
			categories: {
				some: {
					category: {
						slug: where.categories_some.slug
					}
				}
			}
		}),
		...(where?.collections_some?.slug && {
			collections: {
				some: {
					collection: {
						slug: where.collections_some.slug
					}
				}
			}
		}),
		...(where?.excludedIds && {
			AND: {
				id: {
					notIn: where.excludedIds
				}
			}
		})
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
			where: getWhereParams(where)
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
