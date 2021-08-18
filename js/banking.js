/* function doubleIt(num) {
  const result = num * 2;
  return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

function getInputValue() {
  const depositInput = document.getElementById("deposit-amount");
  const depositAmount = parseFloat(depositInput.value);
  // Clearing deposit input field
  depositInput.value = "";
  return depositAmount;
}

// Handle deposit button event
document
  .getElementById("deposit-submit")
  .addEventListener("click", function () {
    /*     const depositInput = document.getElementById("deposit-amount");
    const depositAmount = depositInput.value; */
    const depositAmount = getInputValue();
    //get current deposit
    const currentDeposit = document.getElementById("current-deposit");
    const currentDepositAmount = currentDeposit.innerText;
    const newDepositTotal = depositAmount + parseFloat(currentDepositAmount);
    currentDeposit.innerText = newDepositTotal;

    // Update account balance

    const balanceTotal = document.getElementById("total-balance");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + parseFloat(depositAmount);

    balanceTotal.innerText = newBalanceTotal;
  });

// Handle withdraw button event
document
  .getElementById("withdraw-submit")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-amount");
    const withdrawAmount = withdrawInput.value;
    const currentWithdraw = document.getElementById("current-withdraw");
    const currentWithdrawAmount = currentWithdraw.innerText;
    const newWithdrawTotal =
      parseFloat(withdrawAmount) + parseFloat(currentWithdrawAmount);
    currentWithdraw.innerText = newWithdrawTotal;

    // Update account balance

    const balanceTotal = document.getElementById("total-balance");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - parseFloat(withdrawAmount);

    balanceTotal.innerText = newBalanceTotal;

    // Clearing deposit input field
    withdrawInput.value = "";
  });
