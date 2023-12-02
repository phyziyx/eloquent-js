// The classical (non-abstracted) approach
const dominantDirection = (text) => {
	const directions = [];
	for (const char of text) {
		const code = char.codePointAt(0);

		let foundScript = null;
		for (const script of SCRIPTS) {
			for (const range of script.ranges) {
				if (code >= range[0] && code < range[1]) {
					foundScript = script;
					break;
				}
			}

			if (foundScript) break;
		}

		if (!foundScript) continue;
		const index = directions.findIndex(
			(direction) => direction.name === foundScript.direction
		);

		if (index === -1) {
			directions.push({
				name: foundScript.direction,
				count: 1,
			});
			continue;
		}

		directions[index].count++;
	}

	return directions.sort((a, b) => b.count - a.count)[0]?.name;
};

// The abstracted version
const countBy = (items, groupName) => {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex((c) => c.name == name);
		if (known == -1) {
			counts.push({ name, count: 1 });
		} else {
			counts[known].count++;
		}
	}
	return counts;
};

const characterScript = (code) => {
	for (let script of SCRIPTS) {
		if (
			script.ranges.some(([from, to]) => {
				return code >= from && code < to;
			})
		) {
			return script;
		}
	}
	return null;
};

const dominantDirection = (text) => {
	let scripts = countBy(text, (char) => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.direction : "none";
	}).filter((script) => script.name !== "none");

	return scripts.length === 0
		? null
		: scripts.reduce((a, b) => (b.count > a.count ? b : a)).name;
};

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
