class Group {
	constructor() {
		this.data = [];
	}

	add(element) {
		if (this.has(element)) return;
		this.data.push(element);
	}

	has(element) {
		return !(
			!this.data.length ||
			this.data.findIndex((e) => e === element) === -1
		);
	}

	delete(element) {
		if (!this.data.length) return;
		this.data = this.data.filter((e) => e !== element);
	}

	static from(array) {
		const group = new Group();
		for (const element of array) {
			group.add(element);
		}
		return group;
	}
}

/**
 * The book mentioned I could directly utilise the Symbol.iterator
 * so I decided to try it out even if that defeat the purpose of the
 * exercise.
 */

// Group.prototype[Symbol.iterator] = function () {
// 	return this.data[Symbol.iterator]();
// };

Group.prototype[Symbol.iterator] = function () {
	return new GroupIterator(this);
};

class GroupIterator {
	constructor(group) {
		this.group = group;
		this.index = 0;
	}

	next() {
		if (this.index === this.group.data.length) return { done: true };
		return { value: this.group.data[this.index++], done: false };
	}
}

for (let value of Group.from(["a", "b", "c"])) {
	console.log(value);
}
// → a
// → b
// → c
