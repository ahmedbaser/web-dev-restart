// breakup with var
// no more use of var
// let: let it to reassign
// const: do not allow it to reassign



let money = 25;
money = 35;
// console.log(money);


const brid = 'this is best';
// brid = 'this is nice';

const message = brid + 'best';
console.log(message);

const numbers = [12,89,65,45];
// reasign is not allowed

numbers = [77,66,55,22,99]
numbers.push(56);
numbers[1] = 90;
// console.log(numbers);



const student = {
    name: 'mofiz',
    address: 'hazipur'
}
student.name =  'Nice';
let  sum = 0;
for(let i = 0; i < numbers.length; i++) {
    const number =numbers[i];
    sum = sum + number;
   
}
// console.log(sum)