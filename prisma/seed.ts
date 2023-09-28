import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { product } from 'graphql/schema/resolvers/Query/product';

type PrismaCreateResult<T extends (...args: any[]) => any> = Awaited<
	ReturnType<T>
>;

const prisma = new PrismaClient();

const generateCategories = async (count: number) => {
	const categories: Array<
		PrismaCreateResult<typeof prisma.category.create>
	> = [];

	for (let i = 0; i < count; i++) {
		const categoryName = faker.commerce.department();
		const createdCategory = await prisma.category.create({
			data: {
				name: categoryName,
				slug: faker.helpers.slugify(categoryName).toLowerCase()
			}
		});

		categories.push(createdCategory);
	}
	return categories;
};

// const generateProductsCategories = async (
// 	products: Array<PrismaCreateResult<typeof prisma.product.create>>,
// 	categories: Array<PrismaCreateResult<typeof prisma.category.create>>
// ) => {
// 	const productsCategories: Array<
// 		PrismaCreateResult<typeof prisma.productCategory.create>
// 	> = [];

// 	Promise.all(
// 		products.map(async (product) => {
// 			categories.map(async (category) => {
// 				const createdProductCategory =
// 					await prisma.productCategory.create({
// 						data: {
// 							category: {
// 								connect: {
// 									id: category.id
// 								}
// 							},
// 							product: {
// 								connect: {
// 									id: product.id
// 								}
// 							}
// 						}
// 					});
// 				productsCategories.push(createdProductCategory);
// 			});
// 		})
// 	);
// 	return productsCategories;
// };

const generateProducts = async (count: number) => {
	const products: Array<
		PrismaCreateResult<typeof prisma.product.create>
	> = [];

	for (let i = 0; i < count; i++) {
		const name = faker.commerce.productName();

		const createdProduct = await prisma.product.create({
			data: {
				name: name,
				slug: faker.helpers.slugify(name).toLowerCase(),
				description: faker.commerce.productDescription(),
				price: Number(faker.commerce.price()) * 100
			}
		});
		products.push(createdProduct);
	}
	return products;
};

const generateRatingsForProducts = async (
	products: Array<PrismaCreateResult<typeof prisma.product.create>>,
	count: number
) => {
	const ratings: Array<
		PrismaCreateResult<typeof prisma.rating.create>
	> = [];

	Promise.all(
		products.map(async (product) => {
			for (let i = 0; i < count; i++) {
				const rating = faker.number.int({ min: 1, max: 5 });
				const createdRating = await prisma.rating.create({
					data: {
						rating: rating,
						comment: faker.lorem.sentence(),
						product: {
							connect: {
								id: product.id
							}
						}
					}
				});
				ratings.push(createdRating);
			}
		})
	);

	return ratings;
};

const generateCollections = async (count: number) => {
	const collections: Array<
		PrismaCreateResult<typeof prisma.collection.create>
	> = [];
	for (let i = 0; i < count; i++) {
		const name = 'collection ' + faker.commerce.department();
		const collection = await prisma.collection.create({
			data: {
				name: name,
				slug: faker.helpers.slugify(name).toLowerCase(),
				description: faker.commerce.productDescription()
			}
		});
		collections.push(collection);
	}
	return collections;
};

const products = await generateProducts(100);
const ratings = await generateRatingsForProducts(products, 5);

const collections = await generateCollections(5);
const categories = await generateCategories(10);

products.forEach(async (product) => {
	await prisma.product.update({
		where: { id: product.id },
		data: {
			collections: {
				create: [
					{
						collection: {
							connect: {
								id: collections[
									Math.floor(Math.random() * collections.length)
								].id
							}
						}
					}
				]
			},
			categories: {
				create: [
					{
						category: {
							connect: {
								id: categories[
									Math.floor(Math.random() * categories.length)
								].id
							}
						}
					}
				]
			}
		}
	});
});
