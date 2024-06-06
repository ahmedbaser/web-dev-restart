//DRY ---> Do Not Repeat your self


document.getElementById('btn-deposit').addEventListener('click', function() {

/* 
1. get the element by id
2. get the value from the element
3. convert string value to a number
4. 

*/    
    
const newDepositAmount = getInputFieldValueById('deposit-field');

/* 
1. get previous deposit total id 
*/

const previousDepositTotal = getTextElementValueById('deposit-total');

// calculate new deposit total
const newDepositTotal = previousDepositTotal  + newDepositAmount;

// set deposit  total value

setTextElementValueById('deposit-total', newDepositTotal);

// get previous balance by using the function

const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueById('balance-total', newBalanceTotal)
})
