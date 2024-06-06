const add = (frist, second) => frist + second;
const getFullName = (frist, last) => frist + ' ' + last;
const multiply = (a,b) => a * b;


const result = multiply(7, 8);
// console.log(result);

const newName =  getFullName('baser','ahmed');
// console.log(newName);

const addAll = (a,b,c,d,e,f) => a+ b + c + d + e + f;

// no parameter arrow function 
const getPie = () => 3.14;


// one parameter 

const doubleIt = (num) => num * 2;

// one parameter simple version 
const fiveTimes = num => num * 5;

// multi line arrow function 

const doMath = (x, y, z) => {
    const fristSum = x + y;
    const  secondSum = y + z;
    const multiplyResult = fristSum * secondSum;
    const result = multiplyResult / 2;
    return result;

}



