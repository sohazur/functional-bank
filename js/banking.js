function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const depositAmount = parseFloat(input.value);
  // Clearing deposit input field
  input.value = "";
  return depositAmount;
}

function updateTotalField(transcAmount, totalId) {
  const currentTransc = document.getElementById(totalId);
  const currentTranscAmount = currentTransc.innerText;
  const newTranscTotal = transcAmount + parseFloat(currentTranscAmount);
  currentTransc.innerText = newTranscTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("total-balance");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  if (isAdd) {
    balanceTotal.innerText = previousBalanceTotal + parseFloat(amount);
  } else {
    balanceTotal.innerText = previousBalanceTotal - parseFloat(amount);
  }
}

// Handle deposit button event
document
  .getElementById("deposit-submit")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-amount");
    //get current deposit
    updateTotalField(depositAmount, "current-deposit");

    // Update account balance
    updateBalance(depositAmount, true);
  });

// Handle withdraw button event
document
  .getElementById("withdraw-submit")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-amount");
    updateTotalField(withdrawAmount, "current-withdraw");

    // Update account balance
    updateBalance(withdrawAmount, false);
  });
