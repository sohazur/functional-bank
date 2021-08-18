function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const depositAmount = parseFloat(input.value);
  // Clearing deposit input field
  input.value = "";
  return depositAmount;
}

// Handle deposit button event
document
  .getElementById("deposit-submit")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-amount");
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
    const withdrawAmount = getInputValue("withdraw-amount");
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
  });
