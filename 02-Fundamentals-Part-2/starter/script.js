"user stric";

// >>>>>>>>> functions <<<<<<<<<<
function logger() {
	console.log("My name is Aldair");
}

//Calling the function
logger();
logger();

//Function with parameters
function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

//console a return value from a function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);





//  >>>>>>>>>>> FUNCTIONS DECLARATIONS VS EXPRESSIONS <<<<<<<<<<
// Function declaration
function calcAge1(birthyear) {
	return 2022 - birthyear;
}
const age1 = calcAge1(1995);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {		// anonymous function
	return 2022 - birthYear;
}
calcAge2(1998);