function every(array, test) {
	for (const x of array) {
		if (!test(x)) return false;
	}
	return true;
}

function every(array, test) {
	return !array.some((x) => {
		return !test(x);
	});
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
