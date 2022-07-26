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




// >>>>>>>>>> ARROW FUNCTIONS <<<<<<<<<<
const calcAge3 = birthYear => 2022 - birthYear;     // single line function
console.log(calcAge3(2016));

// multiple lines function
const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2022 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1995, "Aldair"));





// >>>>>>>>>>> FUNCTIONS CALLING OTHER FUNCTIONS <<<<<<<<<<<
const cutFruitPieces = (fruit) => {
	return fruit * 4
}

const fruitProcessor2 = (apples, oranges) => {
	const applePieces = cutFruitPieces(apples);
	const orangesPieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;

	return juice
}
console.log(fruitProcessor2(2, 3));







// >>>>>>>>>>> ARRAYS <<<<<<<<<<<
//Common syntax (literal syntax)
const friends = ['Michael', 'Steven', 'Peter'];

// declaration using Array functions
const years = new Array(1991, 1984, 2008, 2020);

console.log("friends array: ", friends);
console.log(`First friends element: `, friends[0]);
console.log(friends.length);	// result is 3
console.log(friends[friends.length - 1]);	// print last array element

// mutate the array element
friends[2] = 'Jay';
console.log(friends[2]);

