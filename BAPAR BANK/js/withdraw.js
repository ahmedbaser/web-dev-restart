// step:1 add evenListner to the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function(){

// step:2 get the withdraw value from input filed  
// For input field  use .value to get the value form input 
const withdrawField = document.getElementById('withdraw-filed');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);


// step:7 clear the input filed
withdrawField.value = '';

if(isNaN(newWithdrawAmount)) {
    alert('please provide a valid number')
    return;
}

// step:3 get the current withdraw total
// for non input (element otherthan input, textarea) use innerText to get the value for currnt text filed


const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalAmountString = withdrawTotalElement.innerText;
const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalAmountString);

// step:5 get  current balance total

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


if(newWithdrawAmount > previousBalanceTotal) {
    alert('Do not have enough money');
    return;
}
// step:4 add the number to the total withdraw
const currentWithdrawTotalAmount = previousWithdrawTotalAmount + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotalAmount;



// step:6 calculate the total balance
const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = currentBalanceTotal;

// step:7 clear the deposit filed



});