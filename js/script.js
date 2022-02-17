function getExpenses() {
  const food = Number(document.getElementById("food").value);
  const rent = Number(document.getElementById("rent").value);
  const clothes = Number(document.getElementById("clothes").value);
  if (food >= 0 && (rent >= 0) & (clothes >= 0)) {
    const expenses = food + rent + clothes;
    return expenses;
  } else {
    return "input value should be positive";
  }
}
function getIncome() {
  const income = Number(document.getElementById("income").value);
  return income;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getIncome();
  const expenses = getExpenses();
  const balanceText = document.getElementById("balance");
  const totalExpensess = document.getElementById("total-expenses");

  if (typeof expenses == "number") {
    const balanceHave = income - expenses;
    if (balanceHave >= 0) {
      balanceText.innerText = balanceHave;
      totalExpensess.innerText = expenses;
    } else {
      totalExpensess.innerText = expenses;
      balanceText.innerText = "You are spending more than your income";
    }
  } else {
    balanceText.innerText = income;
    totalExpensess.innerText = expenses;
  }
});
document.getElementById("save-btn").addEventListener("click", function () {
  const saveInput = Number(document.getElementById("save-input").value) / 100;
  const income = getIncome();
  const saveBalanceCalc = income * saveInput;
  const remainingBalanceText = document.getElementById("remaing-balance");
  const previousSavedMoney = document.getElementById("saved-money");
  const expensess = getExpenses();
  const balanceHave = income - expensess;
  if (saveBalanceCalc >= 0 && balanceHave >= 0) {
    if (balanceHave > saveBalanceCalc) {
      const remainingBlance = balanceHave - saveBalanceCalc;
      remainingBalanceText.innerText = remainingBlance;
      previousSavedMoney.innerText = saveBalanceCalc;
    } else {
      previousSavedMoney.innerText = "you do not have money";
      remainingBalanceText.innerText = balanceHave;
    }
  } else if (balanceHave < saveBalanceCalc) {
    previousSavedMoney.innerText = "you do not have money";
    remainingBalanceText.innerText = 0;
  } else {
    remainingBalanceText.innerText = balanceHave;
    previousSavedMoney.innerText = "input value should be positive";
  }
});
