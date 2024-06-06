const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const third = numbers.map(x => x/3);
// console.log(third);
// console.log(half);


const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaima'];
const fristLetters = friends.map(friends => friends[0]);
// console.log(fristLetters);


const nameLenght = friends.map(friend => friend.length);
console.log(nameLenght);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 88000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 25000},
];

// const item = products.map(product => console.log(product.name));
const item = products.map(product => product.name);
const prices = products.map(p =>p.price);
// console.log(item);
console.log(prices);



