/* 
1. add the addEvenlistener ot the withdraw button 
2. get withdraw value form the input field
3. clear the withdraw input field after getting the value
4. get the previoius withdraw total
5. calculate new withdraw total and set the value to the withdraw total
6. calculate the new balance and set it to the balance total element

*/
// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function() {
// step-2:
const withdrawField  = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//step-3:

withdrawField.value = '';

//step-4:
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousDepositTotal = parseFloat(previousWithdrawTotalString);


//step-5:
const newWithdrawTotal = previousDepositTotal + newWithdrawAmount;
withdrawTotalElement.innerText = newWithdrawTotal;

//step-6:
const balanceTotalElement = document.getElementById('balance-total');
const previousTotalBalanceString = balanceTotalElement.innerText;
const previousTotalBalance = parseFloat(previousTotalBalanceString);

//step-7:
const newBalanceTotal = previousTotalBalance - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;
});