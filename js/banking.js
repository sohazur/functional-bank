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

// Handle deposit button event
document
  .getElementById("deposit-submit")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-amount");
    //get current deposit
    updateTotalField(depositAmount, "current-deposit");

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
    updateTotalField(withdrawAmount, "current-withdraw");

    // Update account balance

    const balanceTotal = document.getElementById("total-balance");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - parseFloat(withdrawAmount);

    balanceTotal.innerText = newBalanceTotal;
  });
