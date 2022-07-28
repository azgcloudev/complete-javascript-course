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




// >>>>>>>>>>> ARRAYS methods <<<<<<<<<<<<
const friends2 = ['Michael', 'Steven', 'Peter'];

// arr.push()	--> add elements to the end of the array
// push return the length of the array
let newArrLen = friends2.push('Jay');
console.log('push() return: ', newArrLen);

// add elements to the beginning of the array shift()
friends2.unshift('John');
console.log('friends2', friends2);

// remove the last element from the array pop()
// returns the element deleted
console.log(friends2.pop());

//remove the first element of an array shift()
friends2.shift();
console.log(friends2);

// of an array element
console.log(friends2.indexOf('Steven'));
console.log(friends2.indexOf('Aldair')); // if the search cannot find the value will return -1

// if the value is or not in the array includes()
console.log(friends2.includes('Peter'));





// >>>>>>>>>> Objects <<<<<<<<<<
const aldair = {
	firstName: 'Aldair',
	lastName: 'Zamora',
	age: 2022 - 1995,
	job: 'Support engineer',
	friends: ['Diego', 'Connie', 'Pancho']
}

console.log('\n*********************************');
console.log(aldair)
console.log(aldair.firstName); // dot notation have to use the property name
console.log(aldair['lastName']); // bracket uses statements

let interestedIn = prompt("Type one option only between: firstName, lastName, age, job or friends");

if (aldair[interestedIn]) {
	console.log(aldair[interestedIn]);
} else {
	interestedIn = prompt('Please enter the correct value. Type one option only between: firstName, lastName, age, job or friends');
}


// you can get undefined if try to access a key from an object that does not exists

//add a new key pair value
aldair.location = 'Costa Rica';
aldair['github'] = 'azgcloudev';

// ---- challange ----
/*
"Aldair has 3 friends, and his best friend is called Diego"

Try to console the phrase but use values from an object
*/

console.log(`${aldair.firstName} has ${aldair.friends.length} friends, and his best friend is called ${aldair.friends[0]}.`);





// >>>>>>>>>> OJECTS METHODS <<<<<<<<<<

const aldairObject = {
	firstName: 'Aldair',
	lastName: 'Zamora',
	birthYear: 1995,
	job: 'Support engineer',
	friends: ['Diego', 'Connie', 'Pancho'],
	hasDriverLicense: true,

	calcAge: function () {
		this.age = 2022 - this.birthYear;
		return this.age;
	},

	// calcAge: function () {
	// 	return 2022 - this.birthYear;
	// },

	getSummary: function() {
		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriverLicense ? 'has a driver\'s license' : 'has no driver license'}`
	}
}

// console.log(aldairObject['calcAge'](aldairObject.birthYear));

// console.log(aldairObject.calcAge());
aldairObject.calcAge();
console.log(`Age is`, aldairObject.age);


console.log(aldairObject.getSummary());