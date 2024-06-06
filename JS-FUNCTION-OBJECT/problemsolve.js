// problem 1 solved
function foo() {
    console.log('foo');
    bar();
}
// foo();

function bar() {
    console.log('bar');
}

// problem 2 solved

function make_avg(num1, num2,num3) {
    //   var sum = num1 + num2 + num3;
    //   var sum1 = sum / 3;
      return sum1;
}
var avg = make_avg(23,45,67);
// console.log(avg)



// problem 3 solved




// function make_avg(arr, size) {
//       let sum = 0; 
//    for(let i = 0; i < arr; i++) {
//          sum += arr[i];
//     //   var avg1 = avg /5;
         
//    } 
//    const avg = sum / size;
//    return avg;
// }

// const numbers = [45,78,90,34,78];
// const arraySize = numbers.length;

// const result = make_avg(numbers, arraySize);
// if(result !== undefined) {
//     console.log('Average :', result)
// }

function make_avg(arr, size) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const Average = sum / size;
    return Average;
}

const numbers = [56,78,90,34,25];
const ArraySize = numbers.length;
const result =  make_avg(numbers, ArraySize);
// console.log(result);


// problem 4 is solved 

function odd_even(value) {
     if(value % 2 == 0) {
        console.log('even number')
     } else {
        console.log('odd number')
     }
}
odd_even(80);



