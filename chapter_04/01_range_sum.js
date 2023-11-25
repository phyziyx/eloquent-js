const range = (start, stop, step = 1) => {
	const numbers = [];

	if (step < 0) {
		for (let i = start; i >= stop; i += step) {
			numbers.push(i);
		}
		return numbers;
	}

	for (let i = start; i <= stop; i += step) {
		numbers.push(i);
	}
	return numbers;
};

// Method 1
const sum = (numbers) => {
	return numbers.reduce((total, number) => (total += number), 0);
};

// Method 2
const sum = (numbers) => {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
};

// Method 3
const sum = (numbers) => {
	let total = 0;
	numbers.forEach((number) => {
		total += number;
	});
	return total;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
