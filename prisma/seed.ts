import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

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
	count: number,
	ProductId: string
) => {
	const ratings: Array<
		PrismaCreateResult<typeof prisma.rating.create>
	> = [];

	for (let i = 0; i < count; i++) {
		const rating = faker.number.int({ min: 1, max: 5 });
		const createdRating = await prisma.rating.create({
			data: {
				rating: rating,
				comment: faker.lorem.sentence(),
				product: {
					connect: {
						id: ProductId
					}
				}
			}
		});
		ratings.push(createdRating);
	}

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

const generateImages = async (count: number) => {
	const images: Array<
		PrismaCreateResult<typeof prisma.image.create>
	> = [];
	for (let i = 0; i < count; i++) {
		const image = await prisma.image.create({
			data: {
				url: faker.image.url({ height: 640, width: 480 }),
				height: 640,
				width: 480
			}
		});
		images.push(image);
	}
	return images;
};

const generateVariants = async (count: number) => {
	const variants: Array<
		PrismaCreateResult<typeof prisma.variant.create>
	> = [];
	for (let i = 0; i < count; i++) {
		const color = faker.color.human();

		const variant = await prisma.variant.create({
			data: {
				name: color
			}
		});
		variants.push(variant);
	}
	return variants;
};

const getRandomNaturalNumber = (max: number) => {
	return Math.floor(Math.random() * max);
};

const generateRadomNumbersWithoutRepetition = (
	count: number,
	max: number
) => {
	const numbers = new Set<number>();
	while (numbers.size < count) {
		numbers.add(Math.floor(Math.random() * max));
	}
	return Array.from(numbers);
};
const products = await generateProducts(100);

const collections = await generateCollections(15);
const categories = await generateCategories(10);
const variants = await generateVariants(10);

const images = await generateImages(20);
collections.forEach(async (collection) => {
	await prisma.collection.update({
		where: { id: collection.id },
		data: {
			images: {
				create: generateRadomNumbersWithoutRepetition(
					1,
					images.length - 1
				).map((i) => ({
					image: {
						connect: {
							id: images[i].id
						}
					}
				}))
			}
		}
	});
});

products.forEach(async (product) => {
	await prisma.product.update({
		where: { id: product.id },
		data: {
			collections: {
				create: generateRadomNumbersWithoutRepetition(
					getRandomNaturalNumber(collections.length - 6),
					collections.length - 1
				).map((i) => ({
					collection: {
						connect: {
							id: collections[i].id
						}
					}
				}))
			},
			images: {
				create: generateRadomNumbersWithoutRepetition(
					getRandomNaturalNumber(5),
					images.length - 1
				).map((i) => ({
					image: {
						connect: {
							id: images[i].id
						}
					}
				}))
			},
			categories: {
				create: generateRadomNumbersWithoutRepetition(
					6,
					categories.length - 1
				).map((i) => ({
					category: {
						connect: {
							id: categories[i].id
						}
					}
				}))
			},
			variants: {
				create: generateRadomNumbersWithoutRepetition(
					getRandomNaturalNumber(variants.length - 4),
					variants.length - 1
				).map((i) => ({
					variant: {
						connect: {
							id: variants[i].id
						}
					}
				}))
			}
		}
	});
});

products.forEach(async (product) => {
	await generateRatingsForProducts(
		Math.floor(Math.random() * 150),
		product.id
	);
});
