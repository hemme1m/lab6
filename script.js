function convertTemp (degrees, tempType) {
	if (tempType === "C") {
		return ((degrees - 32) * (5/9));
	} else if (tempType === "F") {
		return ((degrees * 9/5) + 32);
	} else {
		console.log("Enter in a valid temperature type.");
	}
}

console.log(convertTemp(212, "C"));
console.log(convertTemp(32, "C"));
console.log(convertTemp(65, "C"));
console.log(convertTemp(100, "F"));
console.log(convertTemp(-40, "F"));
console.log(convertTemp(100, "K"));