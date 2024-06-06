// 1. var let const
// break up with var


const numbers = [12,546, 45,98];
let salary = 450;
salary = 455;

// 2. default parameter

function calculateSalary(salary, tax = 0.25, bonus = 0) {
  
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
    
}

// 3. template string

const elementHTML = `
<div>
<h3.>Name:</h3.
<p>Address: </p>
<p>Salary: ${calculateSalary(10000, 0,  0)}</p>
<p>Other: ${numbers[2]}</p>
</div>
`

// 4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;


// 5. spread
const ages = [11, 13, 15, 14, 10, 16];
const ageNew = [...ages, 55, 66, 88];

// destrucing
// in object need to put same name in left side accrodint to object in right side 
const {x, y, ...c} = {x: 45, y: 12, z: 33, name:'sakib Al Hasan', salary: 450000}

// in array doesn't need to put same name in left and right side
const [a,b,...r] = [12, 34, 45, 67, 89]





