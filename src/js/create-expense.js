const createExpense = () => {
  // DOM elements
  const expenseNameInput = document.getElementById("expense-name-input");
  const expenseAmountInput = document.getElementById("expense-amount-input");
  const expenseContainer = document.getElementById("expense-container");

  expenseContainer.addEventListener("click", (e) => {
    const expenseBtn = e.target.closest("#expense-btn");
    if (!expenseBtn) return;

    const expenseName = expenseNameInput.value;
    const expenseAmount = expenseAmountInput.value;

    const existingBudgetColContent = document.querySelector(
      ".existing-budget-col-content",
    );

    let existingBudgetSpent = document.querySelector(".existing-budget-spent");
    const existingBudgetRemaining = document.querySelector(
      ".existing-budget-remaining",
    );
    let existingBudgetAmount = document.querySelector(
      ".existing-budget-amount",
    );

    existingBudgetAmount.textContent =
      existingBudgetAmount.textContent - expenseAmount;
    existingBudgetSpent.textContent = "$" + expenseAmount;

    const html = `
            <div id="expense-item" class="mt-space-lg flex items-center justify-between">
                <span class="text-red-400 font-semibold">${expenseName}</span>
                <span  class="expense-item-amount text-red-400">-$${expenseAmount}</span>
                <button
                  id="expense-delete-btn"
                  class="bg-red-400 text-white-50 text-sm p-space-xs rounded-2xl cursor-pointer shadow-shadow-s hover:bg-red-300 transition-colors duration-300 ease-in"
                >
                  Delete
                </button>
            </div>
    `;

    existingBudgetColContent.insertAdjacentHTML("beforeend", html);
  });
};

export default createExpense;
