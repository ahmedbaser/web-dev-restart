// function topper(num1, num2) {
//      num1 = Jimmarks;
//      num2 = Delamarks;
//   if(num1 < num2) {
//      console.log('Dela')
//   } else {
//     console.log('Jim')
//   }

// }
// topper(84, 75);

// Function to find the topper
// function findTopper(jimScore, delaScore) {
//     if (jimScore > delaScore) {
//         return "Jim";
//     } else if (jimScore < delaScore) {
//         return "Dela";
//     } else {
//         return "Both Jim and Dela";
//     }
// }

// // Taking input from the user (you can replace this with your actual input mechanism)
// let input = "84, 75"; // Sample input
// let scores = input.split(',').map(score => parseInt(score.trim(), 10));

// // Checking if the
// // re are exactly two scores
// if (scores.length === 2) {
//     let jimScore = scores[0];
//     let delaScore = scores[1];

//     // Finding the topper using the function
//     let topper = findTopper(jimScore, delaScore);

//     // Displaying the result
//     console.log(`${topper} is the topper and gets the tasty cake!`);
// } else {
//     console.log("Please provide exactly two scores separated by a comma.");
// }

// hoom work :

// no: 1 
    
// function findMax(num1,num2,num3) {
//     return Math.max(num1,num2,num3)
// } 

// // let number1 = 78;
// // let number2 = 88;
// // let number3 = 98;

// const maximumNumber = findMax(number1,number2,number3);
// console.log(maximumNumber);

// no: 2

// function findMax1(num1,num2,num3) {
//     let max = num1;

//     if(num2 > max) {
//         max = num2;
//     }
//     if(num3 > max) {
//         max = num3;
//     }
//     return max;

   
// }

// let number1 = 100;
// let number2 = 200;
// let number3 =300;

// const getmax = findMax1(number1,number2,number3);
// console.log(getmax);


// problem 2 solved


// function getTallest(num1,num2,num3) {
     
//     let max = num1;
    
//   if(max < num2) {
//       max = num2;
//   }
//   if(max < num3) {
//     max = num3;
//   }
//   return max;
// }
// let number1 = 157;
// let number2 = 134;
// let number3= 188;

// const getNum = getTallest(number1,number2,number3);
// console.log(getNum);

// solve this problem in diffrent way 

function maxInArray(numbers) {
    let largets = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if(element > largets) {
        largets = element;
    }
   
 }
 return largets;
}

const arr = [167,190,120,145,137];
const talles = maxInArray(arr);
console.log(talles);