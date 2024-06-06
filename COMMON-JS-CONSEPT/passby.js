// // prmitive types are pass by value
// let num1 = 5;
// let num2 = 7;

// function multiply(a, b) {
//     a = 27;
//     const result = a * b;
//     return result;
// }
// console.log(num1);
// multiply(num1, num2);
// console.log(num1);


// // object and array are pass by reffrence
// let student1 = {name: 'Jalil', partner: 'bersah'};
// let student2 = {name: 'raj', partner: 'anika'}


// function makeMovie(couple1, couple2) {
//  couple1.name = 'ononto';
//  couple2.name = 'mim';
// }
// console.log(student1, student2)
// makeMovie(student1, student2);
// console.log(student1, student2)

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));