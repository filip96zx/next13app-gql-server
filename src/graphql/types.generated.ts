import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig
} from 'graphql';
import { Context, Mapper } from '../types.js';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename'
				? T[P]
				: never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
};

export type Aggregate = {
	count: Scalars['Int']['output'];
};

export type Category = {
	id: Scalars['ID']['output'];
	image: Image;
	name?: Maybe<Scalars['String']['output']>;
	products?: Maybe<Array<Maybe<Product>>>;
	slug?: Maybe<Scalars['String']['output']>;
};

export type CategoryproductsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CategorySomeInput = {
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryWhereInput = {
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type Collection = {
	description: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	images: Array<Image>;
	name: Scalars['String']['output'];
	products: Array<Product>;
	slug: Scalars['String']['output'];
};

export type CollectionimagesArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionproductsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionSomeInput = {
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionWhereInput = {
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type Connection = {
	aggregate: Aggregate;
};

export type Image = {
	height: Scalars['Int']['output'];
	url: Scalars['String']['output'];
	width: Scalars['Int']['output'];
};

export type Mutation = {
	orderCreate?: Maybe<Order>;
	orderItemUpdate?: Maybe<OrderItem>;
	orderItemsUpdate?: Maybe<Order>;
	orderUpdateStatus?: Maybe<Order>;
	productCalculateAndUpdateAverageRating?: Maybe<Product>;
	productsCalculateAndUpdateAverageRating: Array<Product>;
	ratingCreate: Rating;
};

export type MutationorderCreateArgs = {
	items: Array<OrderItemInput>;
};

export type MutationorderItemUpdateArgs = {
	id: Scalars['ID']['input'];
	quantity: Scalars['Int']['input'];
};

export type MutationorderItemsUpdateArgs = {
	id: Scalars['ID']['input'];
	items: Array<OrderItemInput>;
	updateMethod?: InputMaybe<OrderItemsUpdateMethod>;
};

export type MutationorderUpdateStatusArgs = {
	id: Scalars['ID']['input'];
	status: OrderStatus;
};

export type MutationproductCalculateAndUpdateAverageRatingArgs = {
	id: Scalars['ID']['input'];
};

export type MutationratingCreateArgs = {
	productId: Scalars['ID']['input'];
	ratingInput: RatingInput;
};

export type Order = {
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	id: Scalars['ID']['output'];
	items: Array<OrderItem>;
	status: OrderStatus;
	totalItems: Scalars['Int']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderitemsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderByInput = {
	field: SortableField;
	order: SortOrder;
};

export type OrderItem = {
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	price: Scalars['Int']['output'];
	productId: Scalars['ID']['output'];
	quantity: Scalars['Int']['output'];
	variantId: Scalars['ID']['output'];
	variantName: Scalars['String']['output'];
};

export type OrderItemInput = {
	productId: Scalars['ID']['input'];
	quantity: Scalars['Int']['input'];
	variantId: Scalars['ID']['input'];
};

export type OrderItemsUpdateMethod = 'INCREMENT' | 'SET';

export type OrderStatus = 'DRAFT' | 'PAID' | 'PENDING';

export type OrderWhereInput = {
	status?: InputMaybe<OrderStatus>;
};

export type Product = {
	averageRating: Scalars['Float']['output'];
	categories: Array<Maybe<Category>>;
	collections: Array<Maybe<Collection>>;
	createdAt: Scalars['DateTime']['output'];
	description: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	images: Array<Maybe<Image>>;
	name: Scalars['String']['output'];
	price: Scalars['Int']['output'];
	ratings: Array<Rating>;
	ratingsCount: Scalars['Int']['output'];
	slug: Scalars['String']['output'];
	variants: Array<Variant>;
};

export type ProductcategoriesArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductcollectionsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductimagesArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductratingsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductRelatedWhereInput = {
	productName?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereInput = {
	categories_some?: InputMaybe<CategorySomeInput>;
	collections_some?: InputMaybe<CollectionSomeInput>;
	excludedIds?: InputMaybe<Array<Scalars['ID']['input']>>;
	id?: InputMaybe<Scalars['ID']['input']>;
	nameContains?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
	categories: Array<Category>;
	categoriesConnection: Connection;
	category?: Maybe<Category>;
	collections: Array<Collection>;
	collectionsConnection: Connection;
	order?: Maybe<Order>;
	product?: Maybe<Product>;
	products: Array<Product>;
	productsConnection: Connection;
	productsRelated: Array<Product>;
	ratingConnection: Connection;
	ratings: Array<Rating>;
};

export type QuerycategoriesArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<CategoryWhereInput>;
};

export type QuerycategoriesConnectionArgs = {
	where?: InputMaybe<CategoryWhereInput>;
};

export type QuerycategoryArgs = {
	id: Scalars['ID']['input'];
};

export type QuerycollectionsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<CollectionWhereInput>;
};

export type QuerycollectionsConnectionArgs = {
	where?: InputMaybe<CollectionWhereInput>;
};

export type QueryorderArgs = {
	id: Scalars['ID']['input'];
	where?: InputMaybe<OrderWhereInput>;
};

export type QueryproductArgs = {
	id: Scalars['ID']['input'];
};

export type QueryproductsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<OrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ProductWhereInput>;
};

export type QueryproductsConnectionArgs = {
	where?: InputMaybe<ProductWhereInput>;
};

export type QueryproductsRelatedArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ProductRelatedWhereInput>;
};

export type QueryratingConnectionArgs = {
	where?: InputMaybe<RatingWhereInput>;
};

export type QueryratingsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<RatingWhereInput>;
};

export type Rating = {
	comment: Scalars['String']['output'];
	createdAt: Scalars['DateTime']['output'];
	email: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	rating: Scalars['Int']['output'];
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	userName: Scalars['String']['output'];
};

export type RatingInput = {
	comment: Scalars['String']['input'];
	email: Scalars['String']['input'];
	rating: Scalars['Int']['input'];
	title: Scalars['String']['input'];
	userName: Scalars['String']['input'];
};

export type RatingWhereInput = {
	productId?: InputMaybe<Scalars['ID']['input']>;
};

export type SortOrder = 'asc' | 'desc';

export type SortableField =
	| 'averageRating'
	| 'createdAt'
	| 'name'
	| 'price'
	| 'slug';

export type Variant = {
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<
	TResult,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<
	TResult,
	TParent,
	TContext,
	TArgs
> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> =
	(
		parent: TParent,
		args: TArgs,
		context: TContext,
		info?: GraphQLResolveInfo
	) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<
	TResult,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> =
	| SubscriptionSubscriberObject<
			TResult,
			TKey,
			TParent,
			TContext,
			TArgs
	  >
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {}
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Aggregate: ResolverTypeWrapper<Mapper<Aggregate>>;
	Int: ResolverTypeWrapper<Mapper<Scalars['Int']['output']>>;
	Category: ResolverTypeWrapper<Mapper<Category>>;
	ID: ResolverTypeWrapper<Mapper<Scalars['ID']['output']>>;
	String: ResolverTypeWrapper<Mapper<Scalars['String']['output']>>;
	CategorySomeInput: ResolverTypeWrapper<Mapper<CategorySomeInput>>;
	CategoryWhereInput: ResolverTypeWrapper<Mapper<CategoryWhereInput>>;
	Collection: ResolverTypeWrapper<Mapper<Collection>>;
	CollectionSomeInput: ResolverTypeWrapper<
		Mapper<CollectionSomeInput>
	>;
	CollectionWhereInput: ResolverTypeWrapper<
		Mapper<CollectionWhereInput>
	>;
	Connection: ResolverTypeWrapper<Mapper<Connection>>;
	DateTime: ResolverTypeWrapper<
		Mapper<Scalars['DateTime']['output']>
	>;
	Image: ResolverTypeWrapper<Mapper<Image>>;
	Mutation: ResolverTypeWrapper<{}>;
	Order: ResolverTypeWrapper<Mapper<Order>>;
	OrderByInput: ResolverTypeWrapper<Mapper<OrderByInput>>;
	OrderItem: ResolverTypeWrapper<Mapper<OrderItem>>;
	OrderItemInput: ResolverTypeWrapper<Mapper<OrderItemInput>>;
	OrderItemsUpdateMethod: ResolverTypeWrapper<
		Mapper<OrderItemsUpdateMethod>
	>;
	OrderStatus: ResolverTypeWrapper<Mapper<OrderStatus>>;
	OrderWhereInput: ResolverTypeWrapper<Mapper<OrderWhereInput>>;
	Product: ResolverTypeWrapper<Mapper<Product>>;
	Float: ResolverTypeWrapper<Mapper<Scalars['Float']['output']>>;
	ProductRelatedWhereInput: ResolverTypeWrapper<
		Mapper<ProductRelatedWhereInput>
	>;
	ProductWhereInput: ResolverTypeWrapper<Mapper<ProductWhereInput>>;
	Query: ResolverTypeWrapper<{}>;
	Rating: ResolverTypeWrapper<Mapper<Rating>>;
	RatingInput: ResolverTypeWrapper<Mapper<RatingInput>>;
	RatingWhereInput: ResolverTypeWrapper<Mapper<RatingWhereInput>>;
	SortOrder: ResolverTypeWrapper<Mapper<SortOrder>>;
	SortableField: ResolverTypeWrapper<Mapper<SortableField>>;
	Variant: ResolverTypeWrapper<Mapper<Variant>>;
	Boolean: ResolverTypeWrapper<Mapper<Scalars['Boolean']['output']>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Aggregate: Mapper<Aggregate>;
	Int: Mapper<Scalars['Int']['output']>;
	Category: Mapper<Category>;
	ID: Mapper<Scalars['ID']['output']>;
	String: Mapper<Scalars['String']['output']>;
	CategorySomeInput: Mapper<CategorySomeInput>;
	CategoryWhereInput: Mapper<CategoryWhereInput>;
	Collection: Mapper<Collection>;
	CollectionSomeInput: Mapper<CollectionSomeInput>;
	CollectionWhereInput: Mapper<CollectionWhereInput>;
	Connection: Mapper<Connection>;
	DateTime: Mapper<Scalars['DateTime']['output']>;
	Image: Mapper<Image>;
	Mutation: {};
	Order: Mapper<Order>;
	OrderByInput: Mapper<OrderByInput>;
	OrderItem: Mapper<OrderItem>;
	OrderItemInput: Mapper<OrderItemInput>;
	OrderWhereInput: Mapper<OrderWhereInput>;
	Product: Mapper<Product>;
	Float: Mapper<Scalars['Float']['output']>;
	ProductRelatedWhereInput: Mapper<ProductRelatedWhereInput>;
	ProductWhereInput: Mapper<ProductWhereInput>;
	Query: {};
	Rating: Mapper<Rating>;
	RatingInput: Mapper<RatingInput>;
	RatingWhereInput: Mapper<RatingWhereInput>;
	Variant: Mapper<Variant>;
	Boolean: Mapper<Scalars['Boolean']['output']>;
};

export type AggregateResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Aggregate'] = ResolversParentTypes['Aggregate']
> = {
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Category'] = ResolversParentTypes['Category']
> = {
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	image?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
	name?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Product']>>>,
		ParentType,
		ContextType,
		Partial<CategoryproductsArgs>
	>;
	slug?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']
> = {
	description?: Resolver<
		ResolversTypes['String'],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	images?: Resolver<
		Array<ResolversTypes['Image']>,
		ParentType,
		ContextType,
		Partial<CollectionimagesArgs>
	>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes['Product']>,
		ParentType,
		ContextType,
		Partial<CollectionproductsArgs>
	>;
	slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Connection'] = ResolversParentTypes['Connection']
> = {
	aggregate?: Resolver<
		ResolversTypes['Aggregate'],
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
	name: 'DateTime';
}

export type ImageResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Image'] = ResolversParentTypes['Image']
> = {
	height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
	orderCreate?: Resolver<
		Maybe<ResolversTypes['Order']>,
		ParentType,
		ContextType,
		RequireFields<MutationorderCreateArgs, 'items'>
	>;
	orderItemUpdate?: Resolver<
		Maybe<ResolversTypes['OrderItem']>,
		ParentType,
		ContextType,
		RequireFields<MutationorderItemUpdateArgs, 'id' | 'quantity'>
	>;
	orderItemsUpdate?: Resolver<
		Maybe<ResolversTypes['Order']>,
		ParentType,
		ContextType,
		RequireFields<MutationorderItemsUpdateArgs, 'id' | 'items'>
	>;
	orderUpdateStatus?: Resolver<
		Maybe<ResolversTypes['Order']>,
		ParentType,
		ContextType,
		RequireFields<MutationorderUpdateStatusArgs, 'id' | 'status'>
	>;
	productCalculateAndUpdateAverageRating?: Resolver<
		Maybe<ResolversTypes['Product']>,
		ParentType,
		ContextType,
		RequireFields<
			MutationproductCalculateAndUpdateAverageRatingArgs,
			'id'
		>
	>;
	productsCalculateAndUpdateAverageRating?: Resolver<
		Array<ResolversTypes['Product']>,
		ParentType,
		ContextType
	>;
	ratingCreate?: Resolver<
		ResolversTypes['Rating'],
		ParentType,
		ContextType,
		RequireFields<
			MutationratingCreateArgs,
			'productId' | 'ratingInput'
		>
	>;
};

export type OrderResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Order'] = ResolversParentTypes['Order']
> = {
	createdAt?: Resolver<
		Maybe<ResolversTypes['DateTime']>,
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	items?: Resolver<
		Array<ResolversTypes['OrderItem']>,
		ParentType,
		ContextType,
		Partial<OrderitemsArgs>
	>;
	status?: Resolver<
		ResolversTypes['OrderStatus'],
		ParentType,
		ContextType
	>;
	totalItems?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType
	>;
	updatedAt?: Resolver<
		Maybe<ResolversTypes['DateTime']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']
> = {
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	variantId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	variantName?: Resolver<
		ResolversTypes['String'],
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
	averageRating?: Resolver<
		ResolversTypes['Float'],
		ParentType,
		ContextType
	>;
	categories?: Resolver<
		Array<Maybe<ResolversTypes['Category']>>,
		ParentType,
		ContextType,
		Partial<ProductcategoriesArgs>
	>;
	collections?: Resolver<
		Array<Maybe<ResolversTypes['Collection']>>,
		ParentType,
		ContextType,
		Partial<ProductcollectionsArgs>
	>;
	createdAt?: Resolver<
		ResolversTypes['DateTime'],
		ParentType,
		ContextType
	>;
	description?: Resolver<
		ResolversTypes['String'],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	images?: Resolver<
		Array<Maybe<ResolversTypes['Image']>>,
		ParentType,
		ContextType,
		Partial<ProductimagesArgs>
	>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	ratings?: Resolver<
		Array<ResolversTypes['Rating']>,
		ParentType,
		ContextType,
		Partial<ProductratingsArgs>
	>;
	ratingsCount?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType
	>;
	slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	variants?: Resolver<
		Array<ResolversTypes['Variant']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
	categories?: Resolver<
		Array<ResolversTypes['Category']>,
		ParentType,
		ContextType,
		Partial<QuerycategoriesArgs>
	>;
	categoriesConnection?: Resolver<
		ResolversTypes['Connection'],
		ParentType,
		ContextType,
		Partial<QuerycategoriesConnectionArgs>
	>;
	category?: Resolver<
		Maybe<ResolversTypes['Category']>,
		ParentType,
		ContextType,
		RequireFields<QuerycategoryArgs, 'id'>
	>;
	collections?: Resolver<
		Array<ResolversTypes['Collection']>,
		ParentType,
		ContextType,
		Partial<QuerycollectionsArgs>
	>;
	collectionsConnection?: Resolver<
		ResolversTypes['Connection'],
		ParentType,
		ContextType,
		Partial<QuerycollectionsConnectionArgs>
	>;
	order?: Resolver<
		Maybe<ResolversTypes['Order']>,
		ParentType,
		ContextType,
		RequireFields<QueryorderArgs, 'id'>
	>;
	product?: Resolver<
		Maybe<ResolversTypes['Product']>,
		ParentType,
		ContextType,
		RequireFields<QueryproductArgs, 'id'>
	>;
	products?: Resolver<
		Array<ResolversTypes['Product']>,
		ParentType,
		ContextType,
		Partial<QueryproductsArgs>
	>;
	productsConnection?: Resolver<
		ResolversTypes['Connection'],
		ParentType,
		ContextType,
		Partial<QueryproductsConnectionArgs>
	>;
	productsRelated?: Resolver<
		Array<ResolversTypes['Product']>,
		ParentType,
		ContextType,
		Partial<QueryproductsRelatedArgs>
	>;
	ratingConnection?: Resolver<
		ResolversTypes['Connection'],
		ParentType,
		ContextType,
		Partial<QueryratingConnectionArgs>
	>;
	ratings?: Resolver<
		Array<ResolversTypes['Rating']>,
		ParentType,
		ContextType,
		Partial<QueryratingsArgs>
	>;
};

export type RatingResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Rating'] = ResolversParentTypes['Rating']
> = {
	comment?: Resolver<
		ResolversTypes['String'],
		ParentType,
		ContextType
	>;
	createdAt?: Resolver<
		ResolversTypes['DateTime'],
		ParentType,
		ContextType
	>;
	email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updatedAt?: Resolver<
		ResolversTypes['DateTime'],
		ParentType,
		ContextType
	>;
	userName?: Resolver<
		ResolversTypes['String'],
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Variant'] = ResolversParentTypes['Variant']
> = {
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
	Aggregate?: AggregateResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	Connection?: ConnectionResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	Image?: ImageResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	OrderItem?: OrderItemResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Rating?: RatingResolvers<ContextType>;
	Variant?: VariantResolvers<ContextType>;
};
