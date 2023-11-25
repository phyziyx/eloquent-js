const loop = (count, testFn, updateFn, actionFn) => {
	for (let i = count; testFn(i) === true; i = updateFn(i)) {
		actionFn(i);
	}
};

loop(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
);
// → 3
// → 2
// → 1
