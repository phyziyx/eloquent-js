// Method 1
let size = 8;
for (let i = 0; i < size; i++) {
	let message = "";
	for (let j = 0; j < size; j++) {
		message += i % 2 ? (j % 2 ? " " : "#") : j % 2 ? "#" : " ";
	}
	console.log(message);
}

// Method 2
let size = 8;
let message = "";

for (let i = 0; i < size; i++) {
	for (let j = 0; j < size; j++) {
		message += (i + j) % 2 ? "#" : " ";
	}
	message += "\n";
}

console.log(message);
