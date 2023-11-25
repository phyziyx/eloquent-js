for (let i = 1; i <= 100; i++) {
	let message = "";

	if (i % 3 === 0) {
		message += "Fizz";
	}
	if (i % 5 === 0) {
		message += "Buzz";
	}

	console.log(message.length ? message : i);
	// can also do, which is idiomatic
	console.log(message || n);
}
