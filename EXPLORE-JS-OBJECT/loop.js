const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers) {
//     console.log(number);
// }


// 1. for of van not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// frist option to loop through an object 
const keys = Object.keys(bottle);
// console.log(keys);
/*
3 ways to read object properties 
bottle.color
bottle[key]

 */
for(const key of keys) {
    // console.log(key, bottle[key]);
}

// for loop  if i want to run within object so that i have to do (for in loop) like bellow 
for(const key in bottle) {
    const value = bottle[key];
    // console.log(key, bottle[key]);
    // console.log(key, value)
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}



