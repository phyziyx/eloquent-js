const deepEqual = (a, b) => {
	if (a === b) return true;

	if (
		a === null ||
		b === null ||
		typeof a !== "object" ||
		typeof b !== "object"
	)
		return false;

	const aKeys = Object.keys(a),
		bKeys = Object.keys(b);

	if (aKeys.length !== bKeys.length) return false;

	for (let key in aKeys) {
		if (!bKeys.includes(key) || !deepEqual(key, bKeys)) return false;
	}
	return true;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
