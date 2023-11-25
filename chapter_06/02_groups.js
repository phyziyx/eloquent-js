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
			this.data.length === 0 ||
			this.data.findIndex((e) => e === element) === -1
		);
	}

	delete(element) {
		if (this.data.length === 0) return;
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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
