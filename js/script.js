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

  const saveBalance = income * saveInput;
  const remainingBalanceText = document.getElementById("remaing-balance");
  const expensess = getExpenses();
  const balanceHave = income - expensess;
  if (saveBalance >= 0 && balanceHave>=0) {
    if (balanceHave > saveBalance) {
      const remainingBlance = balanceHave - saveBalance;
      remainingBalanceText.innerText = remainingBlance;
      document.getElementById("saved-money").innerText = saveBalance;
    } else {
      document.getElementById("saved-money").innerText =
        "you do not have money";
      remainingBalanceText.innerText = balanceHave;
    }
  } else {
    remainingBalanceText.innerText = 0;
    document.getElementById("saved-money").innerText =
      "input value should be positive";
  }
});
