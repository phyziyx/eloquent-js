// Method 1
for (let message = "#"; message.length < 8; message += "#") {
	console.log(message);
}

// Method 2
for (let i = 1; i < 8; i++) {
	console.log("#".repeat(i));
}
