import {
	collections,
	reviews,
	summer,
	winter,
	categories
} from './fake.data';
import {
	createCategory,
	createCollection,
	createColorList,
	createProduct,
	createRatingForProduct,
	createVariant
} from './fakeDB.utils';
import {
	generateRadomNumbersWithoutRepetition,
	generateRandomRatingValuesWithOffset,
	getRandomNaturalNumber
} from './math.utils';

const colorVariantCount = 15;

const isWinterCollectionSlug = (slug: string) => {
	return slug === 'winter-magic';
};

const initDb = async (assetsUrl?: string) => {
	const winterImagesPath = `${assetsUrl || ''}/winter/`;
	const summerImagesPath = `${assetsUrl || ''}/summer/`;

	const categoriesList = await Promise.all(
		categories.map(async ({ image, name, slug }) => {
			return createCategory({
				name,
				slug,
				img: {
					url: winterImagesPath + image
				}
			});
		})
	);
	const collectionsList = await Promise.all(
		collections.map(async ({ image, name, slug, description }) => {
			return createCollection({
				name,
				slug,
				description,
				img: {
					url:
						(isWinterCollectionSlug(slug)
							? winterImagesPath
							: summerImagesPath) + image
				}
			});
		})
	);
	const winterCollection = collectionsList.find(
		(collection) => collection.slug === 'winter-magic'
	);
	const summerCollection = collectionsList.find(
		(collection) => collection.slug === 'sunny-vibes-collection'
	);
	if (!winterCollection || !summerCollection) {
		throw new Error('Collections not found');
	}

	const colorVariants = await Promise.all(
		createColorList(colorVariantCount).map(async (color) => {
			return createVariant({ name: color });
		})
	);

	const createCollectionProducts = async (
		collection: typeof winterCollection,
		collectionProducts: typeof winter,
		imagesPath: string
	) => {
		const productsArrays = await Promise.all(
			Object.entries(collectionProducts)
				.map(([categorySlug, products]) => {
					const category = categoriesList.find(
						(category) => category.slug === categorySlug
					);
					if (!category) {
						throw new Error(
							`Category with slug ${categorySlug} does not exist in the database`
						);
					}

					const colorVariantsIndexes =
						generateRadomNumbersWithoutRepetition(
							getRandomNaturalNumber(
								colorVariantCount - colorVariantCount / 2
							),
							colorVariantCount - 1
						);
					return Promise.all(
						products.map(
							async ({ name, description, price, image, slug }) => {
								return createProduct({
									name,
									description,
									price,
									slug,
									img: {
										url: imagesPath + image
									},
									categoryId: category.id,
									collectionId: collection.id,
									colorVariantsIds: colorVariantsIndexes.map(
										(index) => colorVariants[index].id
									)
								});
							}
						)
					);
				})
				.flat()
		);
		return productsArrays.flat();
	};

	const summerCollectionProducts = await createCollectionProducts(
		summerCollection,
		summer,
		summerImagesPath
	);
	const winterCollectionProducts = await createCollectionProducts(
		winterCollection,
		winter,
		winterImagesPath
	);

	[...summerCollectionProducts, ...winterCollectionProducts].forEach(
		async (product) => {
			generateRandomRatingValuesWithOffset({
				offset: Math.random() * 8 - 4
			});
			const commentRatingOffset = Math.random() * 8 - 4;
			const commentsIndexes = generateRadomNumbersWithoutRepetition(
				getRandomNaturalNumber(50),
				reviews.length - 1
			);
			await Promise.all(
				commentsIndexes.map(async (index) =>
					createRatingForProduct({
						productId: product.id,
						rating: generateRandomRatingValuesWithOffset({
							offset: commentRatingOffset
						}),
						comment: reviews[index].title,
						title: reviews[index].comment
					})
				)
			);
		}
	);
};

await initDb();
