// //1. ench to feet problem solve 

// function measure(count) {
   
//     let totalCount = count / 12;
//     return totalCount;
// }
// const getFeet = measure(84);
// // console.log(getFeet);

// //2. even and odd problem solve

// // function  EvenOdd(num1,num2) {
// // //     if(num1 % 2 == 0) {
// //         console.log('true')
// //     } else {
// //         console.log('false')
// //     } if(num2 % 2 == 0) {
// //         console.log('true')
// //     } else {
// //         console.log('false');
// //     }
// // }
// // EvenOdd(98,177);


// // let age = 11;
// // let age
// // age = 12;

// // const countryName = 'Bangladesh';
// // countryName;
// // console.log(age, countryName);

// // 3. problem solved
//     //  find the totla value of array 
//  function getSumofArray(arr) {
//     let sum = 0;
//    for(let i = 0; i < arr.length; i++) {
//     const index =  i;
//     const element = arr[index];
//     sum = sum + element; 
//    }
//    return sum;
//  }

// //  const array = [45,78,90,34,23,77];
// //  const totlaNumber = getSumofArray(array);
// //  console.log(totlaNumber)


// /// ----------------///////

// // 4. find the  sum of the odd number of an array 

// // type 1 in this way 

// // function findOddSum(arr) {
// //     let sum = 0;
// //     for(let i = 0; i < arr.length; i++) {
// //         if(arr[i] % 2 !== 0) {
// //             sum +=  arr[i];
           
// //         } 
        
// //     }
// //     return sum;
// // }
// // const array = [5,7,8,10,45,30];
// // const result =  findOddSum(array);
// // console.log(result);

// // type 2 in this way 

// function findOddSum1(arr) {
//     let Oddsum = 0;
//     for(let num of arr) {
//         if(num % 2 !== 0) {
//             Oddsum += num;
//         }
//     }
//     return Oddsum;
// }

// const inputarr = [5,7,8,10,45,30];
// const result1 = findOddSum1(inputarr);
// // console.log(result1);


// // 5. solved problem kilometer to maile 

// function getKilometer(mile) {
//     let km = mile * 1.60934;
//     return km;
// }
// const totalKilometer = getKilometer(2);
// // console.log(totalKilometer);


// // 6.problem solved convert hour into minute

// function getMinute(hour) {
//     let minutes = 60 * hour;
//     return minutes;
// }
// const totalminute = getMinute(2);
// // console.log(totalminute);




// 7.problem solved find the leapyear and put it in a new array and pint the result 

// function isLeapYear(year) {
//     return(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// function findLeapYears(years) {
//     let leapYears = [];
//     for(let i = 0; i <= years.length; i++) {
//         if(isLeapYear(years[i])) {
//             leapYears.push(years[i]);
//         }
//     }
//     return leapYears;
// }

// const inputArray = [2023,2024,2025,2028,2030];
// const getLeapYear = findLeapYears(inputArray)
// console.log(getLeapYear);

// const arr = ['fruits','mango','bannana','apple','jackfruits','watermaleo'];
// console.log(arr);
// const arr1 = arr.splice(0,3);
// console.log(arr1);

// ------------------------//

// problem 1 solved

const arr = [34,67,78,90];
 
 if(!arr || arr.length === 0) {
    console.log('arr is empty') 
} else {
    let min_arr = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min_arr) {
            min_arr = arr[i];
        } 
    }
    // console.log(min_arr);
}

// problem 2 solved 

let number1 = parseInt(23);
let number2 = parseInt(67);
let number3 = parseInt(90);

let min_number;

if(number1 < number2 && number1 < number3) {
    min_number = number1;
} else if(number2 < number1 && number2 < number3) {
    min_number = number2;
} else {
    min_number = number3;
}
// console.log(min_number);

// problem 3 solved 

function avg(num) {
    let sum = 0;
    let sum2;
    for(let i = 0; i < arr_n.length; i++) {
        sum = sum + arr_n[i];
        sum2 = sum / arr_n.length;
    }
  return sum2;
}


const arr_n = [45,67,89,90,23,45,99];

const average = avg(arr_n);
const average1 = average.toFixed(2)
// console.log(average1);

// problem 4 solved 


function area(height,length) {
  
    let area = height * length;
    return area;

}

const retangalArea = area(23,56);
// console.log(retangalArea);

// problem 5 solved

function largestNumber(num_max) {
    let max_num = number_larg[0];
  for(let i = 0; i < number_larg.length; i++) {
     if(number_larg[i] > max_num) {
        max_num =  number_larg[i];
     }
  }
  return max_num;
}

const number_larg = [78,34,25,77,90,99,100];

const max_number = largestNumber(number_larg);
console.log(max_number);

 





















