/*
1. add event listner to the deposit button
2. get deposit amount from the input field
3. clear the deposit input filed afte getting the value
4. get the previous deposit total
5. calculate new  deposit total  and set the value to the deposit total
6. get the  current balance 
7. calculate the new balance and set it to the balance total element
*/

// step-1: add event listener
document.getElementById('btn-deposit').addEventListener('click', function(){
//  step-2: get the deposit value from input field
 const  depositField = document.getElementById('deposit-field');
 const  newDepositAmountString = depositField.value;
 const newDepositAmount = parseFloat(newDepositAmountString);
 
//  step-3: 
 depositField.value = '';

// step-4: 
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);


// step:5
const newDepositTotal = previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = newDepositTotal;

// step:6
const balanceTotalElement = document.getElementById('balance-total');
const previousTotalBalanceString = balanceTotalElement.innerText;
const previousTotalBalance = parseFloat(previousTotalBalanceString);

// step:7
const newBalanceTotal = previousTotalBalance + newDepositAmount;
balanceTotalElement.innerText = newBalanceTotal;

})