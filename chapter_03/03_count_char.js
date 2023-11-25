const countBs = (string) => {
	return countChar(string, "B");
};

const countChar = (string, char) => {
	let count = 0;
	for (let index = string.length; index >= 0; index--) {
		if (string[index] === char) count++;
	}
	return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
