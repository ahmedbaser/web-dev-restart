// function factorial(number) {
//     let num = 1;
//     let result = 1;
//     while(num <= 7) {
//         result = num * result;
//         num++; 
//     }
    
//     return result;
// }

// const TotlaResult = factorial(90);
// console.log(TotlaResult);

function factorial(number) {
    let i = number;
    let result = 1;
    while(i >= 1) {
        result = result * i;
        i--;
    }
    return result;

}

const result1 = factorial(8);
console.log(result1);