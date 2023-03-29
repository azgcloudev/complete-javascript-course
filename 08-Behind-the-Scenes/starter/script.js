'use strict';

const print = string => { console.log(string)}

function calcAge(birthDay) {
    const age = 2023 - birthDay;
    
    function printAge() {
        console.log(`${firstName} is ${age}, born in ${birthDay}`);
    }

    printAge();

    return age;
}

const firstName = "Jonas";
calcAge(1991);