/* 
1. add withdarw button event handler
2. get withdraw amount usign getInputFieldValueById function
3. get previous withdraw amount by usign getTextElementValueById
4. calculate new withdarw Total and set the value
4.5: set new withdarw Total by usign setTextElementValueById
5.get previous balance total by usign getTextElementValueById

*/






// 1. add eventlistener to the button
document.getElementById('btn-withdraw').addEventListener('click', function() {


//2. get the newWithdrawAmount from withdraw-field
const newWithdrawAmount = getInputFieldValueById('withdraw-field');

//3. get the previous withdarw total
const previousWithdrawTotal = getTextElementValueById('withdraw-total');

//4.calculate the newwithdraw total value
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

//5. set the newwithdraw total value
setTextElementValueById('withdraw-total',newWithdrawTotal);
//6. get previous balance total by usign function
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
setTextElementValueById('balance-total', newBalanceTotal)
});


