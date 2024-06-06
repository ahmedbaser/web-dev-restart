// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// check truthy 

let myVar = 5;
if(myVar) {
    myVar = myVar * 100;
}

else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything 
if(!myMoney) {

}

// let myMoney = 0; // Assume myMoney is false or not set

// if (!myMoney) {
//     console.log("You don't have any money!");
//     // You can put any code here that you want to execute
//     // if myMoney is false or not set
// } else  {
//     console.log('this is best')
// }


const money = 80;
let food;
if(money > 100) {
    food = 'biryani';
}  else {
    food = 'cha biscut';
}

// ternary

let food1 = money > 100 ? 'briyani' : 'cha biscut';


let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink); 

// number to string 

const num1  = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number

const input = '560';
const inputNum = +input;
// console.log(inputNum);

const isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// use && if the left side is true then the right side will be executed
isActive && showUser();

// use || if  the left  side is false then right side will be excuted

isActive || hideUser();

//
// toogle Boolean
isActive = !isActive;

