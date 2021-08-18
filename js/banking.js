/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const severDouble = doubleIt(7); */

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear the deposit input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;

}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}



// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposite button clicked');

    // get the amount deposited
    /* const inputField = document.getElementById('deposit-input');
    const newDepositAmountText = inputField.value;
    // console.log(newDepositAmountText);
    const newDepositAmount = parseFloat(newDepositAmountText); */

    // update deposite total
    /*  const totalElement = document.getElementById('deposit-total');
     // console.log(totalElement.innerText);
     const totalText = totalElement.innerText;
     const previousTotal = parseFloat(totalText);
     const newDepositTotal = previousTotal + newDepositAmount;
     totalElement.innerText = newDepositTotal;
  */
    // update account balance
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
     balanceTotal.innerText = newBalanceTotal;
  */
    /* // clear the deposit input field
    inputField.value = ''; */
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
});



// handle withdraw even handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('button clicked');
    // get the amount withdraw
    /* const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    console.log(newWithdrawAmount); */

    // update withdraw total
    /*  const withdrawTotal = document.getElementById('withdraw-total');
     const previousWithdrawTotalText = withdrawTotal.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
 
     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotal.innerText = newWithdrawTotal; */
    // console.log(newWithdrawTotal);

    // update balance
    /*     const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotal.innerText = newBalanceTotal;
    
     */
    /*  // clear withdraw input
     withdrawInput.value = '';
  */
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
})