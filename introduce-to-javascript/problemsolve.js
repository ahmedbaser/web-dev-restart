// Get the amount of money Harry has
var totalMoney ="1000";

// Get the cost of oranges and apples
var orangeCost ="350";
var appleCost = "350";

// Convert input values to numbers
totalMoney = parseInt(totalMoney);
orangeCost = parseInt(orangeCost);
appleCost = parseInt(appleCost);

// Calculate the total cost
var totalCost = orangeCost + appleCost;

// Calculate the change
var change = totalMoney - totalCost;

// Display the result
// console.log("The change Harry will receive from the shopkeeper is: " + change);


// this is the best solution of the problem 2nd problem////

var Mathematic = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;

var sum = (Mathematic + Biology + Chemistry + Physics + Bangla);
var sum1 = sum / 5;
var sum2 = sum1.toFixed(2);
// console.log(sum2);

/// third problem

var add = "I am going to be";
var add1= "an awesome web developer";

var add2 = add + " " + add1;
// console.log(add2);

// four problem

var input = 119;
var value = 5;
var output = 119 % 5;
// console.log(output);

//// more problem

var fruits = ['Apple', 'Banana', 'Orange'];
   var find = fruits.indexOf('Banana');
//    console.log(find);

/// --------------------/////////
//  this is new problem


const    MeScore  = 85;
const   TomScore  = 66;
const  JaneScore  = 95;
const PeterScore = 56;
const  JohnScore =  40;

function calculateGrade(Score) {
  if( Score >= 80) {
    return 'A';
  } else if(Score >= 60) {
    return 'B';
  } else if(Score >= 50) {
    return 'C';
  } else if(Score >= 40) {
    return 'D';
   } else {
   return 'F';
  }
}

const MeGrade = calculateGrade(MeScore);
const TomGrade = calculateGrade(TomScore)
const JaneGrade = calculateGrade(JaneScore);
const PeterGrade = calculateGrade(PeterScore);
const JohnGrade = calculateGrade(JohnScore);

console.log('My grade: ' + MeGrade);
console.log('Tom grade: ' + TomGrade);
console.log('Jane grade: ' + JaneGrade);
console.log('My grade: ' + PeterGrade);
console.log('My grade: ' + JohnGrade);