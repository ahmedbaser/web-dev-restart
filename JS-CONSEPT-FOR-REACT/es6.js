const numbers = [87,56,34,89,90];

const student = {
    name: 'leo',
    age: 32,
    movies: ['king khan']
}

// 1.template string
const about = `My Name is ${student.name} age of ${student.age} 
 has number ${numbers[2]} also movies ${student.movies[0]}`
//  console.log(about);

// 2. arrow function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThere = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator

const newNumbers = [...numbers];
// create a new array from an older array  and  add an element 
const currentNumbers = [...numbers, 55];
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(numbers)
console.log(newNumbers);
console.log(currentNumbers);

