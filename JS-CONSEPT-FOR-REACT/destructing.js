// 1. array destructuring 
const numbers = [42, 56];
// const x = 56;
// const y = 66;
// const [x, y] = [66, 77];


const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

const [frist, second] = boxify(56,788)
// console.log(boxify(56, 788))
// console.log(boxify(frist, second));


const student = {
    name: 'leo',
    age: 32,
    movies: ['1: king khan', '2: war']
}

const [fristMovie, secondMovie] = student.movies;

// console.log(fristMovie, secondMovie);

// object destructuring
const { name, age } = {name: 'alu', age: 14};
const { name1, age1 } = {id: 12, name: 'alu', salary: 3400, age: 14};

const employe = {
    id: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html','css', 'js','java'],
    specification: {
        height: 66,
        weight: 45,
        address: ' hazipur',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
       
    }
}

const {id, machine} = employe;
const {height, weight} = employe.specification;
const [language] = employe.language;
// console.log(language);
const {brand} = employe.specification.watch;
console.log(brand)


