// step-1: add event listner to the deposite button 
document.getElementById('btn-deposit').addEventListener('click',  function(){
// step-2: get the deposit amount from the input filed 
// For input field use .value to the inside the input filed
const depositFiled = document.getElementById('deposit-filed');
const newDepositAmountString = depositFiled.value;

const newDepositAmount = parseFloat(newDepositAmountString); 



// step-3: get the current deposite total 
// for non-input (element other than input,textarea) use innerText to ge the text

const depositeTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositeTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

//step-4: add numbers to set the total deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount;
depositeTotalElement.innerText = currentDepositTotal;

// step:5 get balance currnt total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step:6 calculate the total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentBalanceTotal;

// step:7 clear the deposit filed

depositFiled.value = '';

})