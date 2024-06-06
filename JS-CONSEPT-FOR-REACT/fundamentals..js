//  1. How to declare a variable usign let and const
    const fatherName = 'Anold';
    let season = 'rainy';
    season = 'winter';
    
    //2. condition
    // 6 basic conditiions: >, <, ===, !==, <=, =
    // multiple conditions: &&, ||

    if(fatherName === 'Anold' || season === 'rainy') {

    }
    else if(fatherName === 'Anold') {

    }
    else {

    }


// 3. array declare
// index
// length, push,
const numbers = [87,56,34,89,90];
numbers[0] = 78;

// 4. for loop
for(let i = 0; i <= numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}


const output = multiply(35, 45)

// 6. Object
// 3 ways to access property by name
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan']
}

console.log(student.age); // direct by property
console.log(student['age'])// access via property string 


