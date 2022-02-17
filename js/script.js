document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = Number(document.getElementById("income").value);
  const food = Number(document.getElementById("food").value);
  const rent = Number(document.getElementById("rent").value);
  const clothes = Number(document.getElementById("clothes").value);
  const expensess = food + rent + clothes;
  const balanceText = document.getElementById("balance");
  const balanceHave = income - expensess;

  const totalExpensess = document.getElementById("total-expenses");
  totalExpensess.innerText = expensess;
  balanceText.innerText = balanceHave;
});
document.getElementById("save-btn").addEventListener('click',function(){
  
  const saveInput=Number(document.getElementById("save-input").value)/100;
  
  const income = Number(document.getElementById("income").value);
  
  const saveBalance=income*saveInput;
  const remainingBalanceText=document.getElementById("remaing-balance");
  const food = Number(document.getElementById("food").value);
  const rent = Number(document.getElementById("rent").value);
  const clothes = Number(document.getElementById("clothes").value);
  const expensess = food + rent + clothes;
  const balanceHave = income - expensess;
  const remainingBlance=balanceHave-saveBalance;
  remainingBalanceText.innerText=remainingBlance;

  document.getElementById("saved-money").innerText=saveBalance;
})
