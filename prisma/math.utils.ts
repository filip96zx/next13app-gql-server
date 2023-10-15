export const getRandomNaturalNumber = (max: number) => {
	return Math.floor(Math.random() * max);
};

export const generateRadomNumbersWithoutRepetition = (
	count: number,
	max: number
) => {
	const numbers = new Set<number>();
	while (numbers.size < count) {
		numbers.add(getRandomNaturalNumber(max));
	}
	return Array.from(numbers);
};

export const generateRandomRatingValuesWithOffset = ({
	offset
}: {
	offset: number;
}) => {
	const minValue = 1;
	const maxValue = 5;
	if (Math.abs(offset) > maxValue - minValue) {
		throw new Error('offset is too big, value is not reachable');
	}
	const randomValue =
		minValue + getRandomNaturalNumber(maxValue - minValue) + offset;

	return Math.min(Math.max(randomValue, minValue), maxValue);
};
