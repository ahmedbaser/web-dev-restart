// problem 1 solevd 
const constVariable = 'hello';
let letVariavle = 'world';

const templatingString = `${constVariable},  ${letVariavle}`;

console.log(templatingString);


const dynamicObject = {
    prop1: constVariable,
    prop2: letVariavle
};
console.log(dynamicObject);

// problem 2 solved 

const division = (num) => num / 5;
console.log(division(25));


// problem 3 solved 
const calculateResult = (input1, input2) =>  {
    const sum = input1 + 2;
    const sum2 = input2 + 2;
    return sum * sum2;
}


console.log(calculateResult(4,8));


// problem 3 solved 


const threeParameter = (input1, input2, input3) => {
  const sum = input1 * input2 * input3;
  return sum; 
}

console.log(threeParameter(10,8,9,));


// problem 4 solved 

const number = [23, 56, 78, 80, 90];

const multiplyNumbers = number.map(number => number * 5);
console.log(multiplyNumbers);


// problem 5 solved 

const OddNum = [23, 33, 77, 56, 78, 80, 90];

const FindOddNum = OddNum.filter(number => number % 2 !== 0);
console.log(FindOddNum);


// problem 6 solved 

const array = [1, 2, 'Three', 5];
const [, , three] = array;
console.log(three);


// SHOULD KNOW THE NAME 
/* 
1. reduce
2. inheritance
3. prototypical chain
4. class, object

*/

// Importance problem 
//   Also 
// Solved

// poblem 1 solved 

let data1 = {
    Sophia: {
    id: 33,
    study: [
              {
                  primary:
                 [
                      { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                ]
            },
                {
                    secondary:
                               [
                                   { school_name: "ABC secondary school"
    
                              },
    
                             { location: "St Lorence" }
                     ]
                  },
                ]
               }
             }                                           
    //  const find = data.Sophia.study[1].secondary[1].location;
    //  console.log(find)  
     
     
//  problem 2 solved 
const data = [
    {
      pHeroCourses: {
        "course-x": "web development"
      }
    },
    {
      pHeroCourses: {
        "course-y": "phitron"
      }
    },
    {
      pHeroCourses: {
        "course-z": "acc"
      }
    },
    {
      pHeroCourses: {
        "course-xyz": "level-2"
      },
      locationField: {
        "en-US": {
          lat: 19.28563,
          lon: 72.8691
        }
      }
    }
  ];
  
  // Extract the pHeroCourses and locationField data
  const courses = data.map(item => item.pHeroCourses);
  const location = data[data.length - 1].locationField["en-US"];
  
  // Output structured data
  const structuredData = {
    courses: courses,
    location: location
  };
  
  console.log(structuredData);
  