"use strict";
/*
 <<< instructions >>>
- 3 teams
- 3 scores per team and total is the average of the three
- winner has to have the average total at least the double of the previous team
*/

/*
*
    s1 score 1
    s2 score 2
    s3 score 3
*
*/
const calcAverage = (s1, s2, s3) => {
    return (s1 + s2 + s3) / 3;
}

let aveKoalas = calcAverage(85, 54, 41);
let aveDolhins = calcAverage(23, 34, 27);

const checkWinner = (aveKoalas, aveDolhins) => {
    if (aveKoalas > aveDolhins * 2) {
        console.log(`The winner is Koalas (${aveKoalas} vs ${aveDolhins})`);
    } else if (aveDolhins > aveKoalas * 2) {
        console.log(`The winner is Dolphins (${aveDolhins} vs ${aveKoalas})`);
    } else {
        console.log(`No team winner`);
    }
}

checkWinner(aveDolhins, aveKoalas);