const max = Math.max(12, 85, 999, 78);

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [...numbers];
const numbers4 = [444,78,...numbers, 111];

let {x,y, ...z} = {x: 1, y: 2, a: 3, b: 4, c: 5};
console.log(x);
console.log(y);
console.log(z);


