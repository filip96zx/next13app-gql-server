/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Aggregate } from './schema/resolvers/Aggregate';
import { Category } from './schema/resolvers/Category';
import { Collection } from './schema/resolvers/Collection';
import { Connection } from './schema/resolvers/Connection';
import { Image } from './schema/resolvers/Image';
import { orderCreate as Mutation_orderCreate } from './schema/resolvers/Mutation/orderCreate';
import { orderItemUpdate as Mutation_orderItemUpdate } from './schema/resolvers/Mutation/orderItemUpdate';
import { orderItemsUpdate as Mutation_orderItemsUpdate } from './schema/resolvers/Mutation/orderItemsUpdate';
import { orderUpdateStatus as Mutation_orderUpdateStatus } from './schema/resolvers/Mutation/orderUpdateStatus';
import { productCalculateAndUpdateAverageRating as Mutation_productCalculateAndUpdateAverageRating } from './schema/resolvers/Mutation/productCalculateAndUpdateAverageRating';
import { productsCalculateAndUpdateAverageRating as Mutation_productsCalculateAndUpdateAverageRating } from './schema/resolvers/Mutation/productsCalculateAndUpdateAverageRating';
import { ratingCreate as Mutation_ratingCreate } from './schema/resolvers/Mutation/ratingCreate';
import { Order } from './schema/resolvers/Order';
import { OrderItem } from './schema/resolvers/OrderItem';
import { Product } from './schema/resolvers/Product';
import { categories as Query_categories } from './schema/resolvers/Query/categories';
import { categoriesConnection as Query_categoriesConnection } from './schema/resolvers/Query/categoriesConnection';
import { category as Query_category } from './schema/resolvers/Query/category';
import { collections as Query_collections } from './schema/resolvers/Query/collections';
import { collectionsConnection as Query_collectionsConnection } from './schema/resolvers/Query/collectionsConnection';
import { order as Query_order } from './schema/resolvers/Query/order';
import { product as Query_product } from './schema/resolvers/Query/product';
import { products as Query_products } from './schema/resolvers/Query/products';
import { productsConnection as Query_productsConnection } from './schema/resolvers/Query/productsConnection';
import { productsRelated as Query_productsRelated } from './schema/resolvers/Query/productsRelated';
import { ratingConnection as Query_ratingConnection } from './schema/resolvers/Query/ratingConnection';
import { ratings as Query_ratings } from './schema/resolvers/Query/ratings';
import { Rating } from './schema/resolvers/Rating';
import { Variant } from './schema/resolvers/Variant';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
	Query: {
		categories: Query_categories,
		categoriesConnection: Query_categoriesConnection,
		category: Query_category,
		collections: Query_collections,
		collectionsConnection: Query_collectionsConnection,
		order: Query_order,
		product: Query_product,
		products: Query_products,
		productsConnection: Query_productsConnection,
		productsRelated: Query_productsRelated,
		ratingConnection: Query_ratingConnection,
		ratings: Query_ratings
	},
	Mutation: {
		orderCreate: Mutation_orderCreate,
		orderItemUpdate: Mutation_orderItemUpdate,
		orderItemsUpdate: Mutation_orderItemsUpdate,
		orderUpdateStatus: Mutation_orderUpdateStatus,
		productCalculateAndUpdateAverageRating:
			Mutation_productCalculateAndUpdateAverageRating,
		productsCalculateAndUpdateAverageRating:
			Mutation_productsCalculateAndUpdateAverageRating,
		ratingCreate: Mutation_ratingCreate
	},

	Aggregate: Aggregate,
	Category: Category,
	Collection: Collection,
	Connection: Connection,
	Image: Image,
	Order: Order,
	OrderItem: OrderItem,
	Product: Product,
	Rating: Rating,
	Variant: Variant,
	DateTime: DateTimeResolver
};
