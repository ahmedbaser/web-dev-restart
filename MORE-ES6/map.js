const numbers = [2, 8, 4, 6, 3];

const output = [];
for(const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
} 


function getdoubles(numbers) {
    const output = [];

    for(const number of numbers) {
        const doubled = doubledItOld(number);
        output.push(doubled);
    } 
    return output;
      
}

function doubledItOld(num) {
   return num * 2;
}

const doubledIt = num => num  * 2;


const makeDouble = numbers.map(doubledIt);
const makeDoubleDirect = numbers.map(num => num  * 2);
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect);
const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);

/* 
purpose:

1. get an array
2. for every elements of the array do somthing
3. store the result
4. return the result array

*/

const result = getdoubles(numbers)
console.log(result);
console.log(makeDouble);
