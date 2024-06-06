// const { object, array } = require("prop-types");

const student = {
    name: 'leo',
    age: 32,
    movies: ['1: king khan', '2: war']
}

// 1. JSON => stringify, parse 
const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2.fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

//keys, values

// const keys = Object.keys(student);
// const values = Object.values(student);

const numbers = [23, 45, 67, 89, 90];
// numbers.forEach(num => console.log(num));
numbers.map(num=> num  * 2);

// for of an array like object 
// loop on an Object usign for in 

// add or remove from an array 




const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'sliver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
    {name: 'camara', price: 9000, brand: 'canon', color: 'gray'},
];

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'}

// copy product array and then add newProduct 
const newProducts = [...products, newProduct];
// console.log(newProducts)

// create a new array without one specigfic item 
// remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);