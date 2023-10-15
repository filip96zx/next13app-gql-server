import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
type ImgParams = {
	img: {
		url: string;
		height?: number;
		width?: number;
	};
};
export const createCategory = ({
	name,
	slug,
	img: { url, width = 1000, height = 1000 }
}: {
	name: string;
	slug: string;
} & ImgParams) => {
	return prisma.category.create({
		data: {
			name,
			slug,
			image: {
				create: {
					url,
					height: height,
					width: width
				}
			}
		}
	});
};

export const createProduct = ({
	description,
	name,
	price,
	slug,
	img: { url, width = 1000, height = 1000 },
	categoryId,
	collectionId,
	colorVariantsIds
}: {
	name: string;
	slug: string;
	description: string;
	price: number;
	categoryId: string;
	collectionId: string;
	colorVariantsIds: string[];
} & ImgParams) => {
	return prisma.product.create({
		data: {
			name,
			slug,
			description,
			price,
			images: {
				create: {
					image: { create: { url, height, width } }
				}
			},
			categories: {
				create: {
					category: { connect: { id: categoryId } }
				}
			},
			collections: {
				create: {
					collection: { connect: { id: collectionId } }
				}
			},
			variants: {
				create: colorVariantsIds.map((id) => ({
					variant: { connect: { id } }
				}))
			}
		}
	});
};

export const createRatingForProduct = async ({
	productId,
	comment,
	rating,
	title
}: {
	productId: string;
	comment: string;
	rating: number;
	title: string;
}) => {
	return prisma.rating.create({
		data: {
			rating,
			comment,
			email: faker.internet.email(),
			title,
			userName: faker.internet.userName(),
			product: {
				connect: {
					id: productId
				}
			}
		}
	});
};

export const createCollection = ({
	description,
	name,
	slug,
	img: { url, width = 1000, height = 1000 }
}: {
	name: string;
	slug: string;
	description: string;
} & ImgParams) => {
	return prisma.collection.create({
		data: {
			name,
			slug,
			description,
			images: {
				create: {
					image: { create: { url, height, width } }
				}
			}
		}
	});
};

export const createVariant = async ({ name }: { name: string }) => {
	return prisma.variant.create({
		data: {
			name
		}
	});
};

export const createColorList = (count: number) => {
	return Array.from({ length: count }, () => faker.color.human());
};
