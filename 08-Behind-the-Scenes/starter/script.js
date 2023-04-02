'use strict';

//// HOSTING AND TDZ (temporary dead zone)

// variables
console.log(me);    // undefined
// console.log(job);   // reference error
// console.log(year);

var me = 'Aldair';
let job = 'Support Engineer';
const year = 2023;

// functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrw(2,3));

function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b;
}

const addArrw = (a, b) => a + b;



//// THIS LEYWORD
// in an arrow function it takes values from its parent function scope and not from the arrow function scope

console.log(`\n------ THIS KEYWORD ------`);
console.log(this);

const calcAge = function (birthDay) {
    console.log(2037 - birthDay);
    console.log(this);
};

calcAge(1995); 

const calcAgeArr = birthDay => {
    console.log(2031 - birthDay);
    console.log(this);
}
calcAgeArr(1998);


const aldair = {
    firstName: 'aldair',
    lastName: 'zamora',
    age: 27,
    year: 1995,
    printInfo: function() {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} old.`);
    },
    calcAge: function() {
        return 2023 - this.year;
    }
}
aldair.printInfo();


// this keyword references the object that is calling the method
const matilda = {
    year: 1997,
}

matilda.calcAge = aldair.calcAge;
console.log(aldair.calcAge());
console.log(matilda.calcAge());
