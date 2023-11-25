const isEven = (number) => {
	return number === 0
		? true
		: number === 1
		? false
		: number < 0
		? isEven(-number)
		: isEven(number - 2);
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
