/**
 * I also added a version that traverses in ascending order
 * for  arrayToListForward  but it is not as clean as
 * traversing in descending order
 */

const arrayToListForward = (array) => {
	let list = null;
	let rest = list;
	for (const number of array) {
		rest = { value: number, rest: null };
		if (!list) list = rest;
		else list.rest = rest;
	}
	return list;
};

const arrayToList = (array) => {
	let list = null;
	for (let idx = array.length - 1; idx >= 0; idx--) {
		list = { value: array[idx], rest: list };
	}
	return list;
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

const listToArray = (list) => {
	let current = list;
	let array = [];
	while (current) {
		array.push(current.value);
		current = current.rest;
	}
	return array;
};

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

const prepend = (number, list) => {
	return {
		value: number,
		rest: list,
	};
};

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

/**
 * Iterative and recursive methods as required
 */

const nth = (list, index) => {
	if (!list || index < 0) return undefined;
	let value = undefined;
	let current = list;

	while (index-- >= 0) {
		value = current.value;
		current = current.rest;
	}
	return value;
};

const nthRecursive = (list, index) => {
	if (!list || index < 0) return undefined;
	if (index === 0) return list.value;
	return nthRecursive(list.rest, index - 1);
};

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20
