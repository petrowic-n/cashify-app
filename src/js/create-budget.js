const createBudget = () => {
  // DOM elements
  const createBudgetContainer = document.getElementById(
    "create-budget-container",
  );
  const budgetTextInput = document.getElementById("budget-text-input");
  const budgetAmountInput = document.getElementById("budget-amount-input");
  const existingBudgetContainer = document.getElementById(
    "existing-budget-container",
  );
  const expenseSelect = document.getElementById('expense-select')

  createBudgetContainer.addEventListener("click", (e) => {
    const createBudgetBtn = e.target.closest("#create-budget-btn");
    let budgetName = budgetTextInput.value;
    let budgetAmount = budgetAmountInput.value;

    if (!createBudgetBtn) return;

    // creating select option
    const selectOption = `<option>${budgetName}</option>`
    expenseSelect.insertAdjacentHTML("beforeend", selectOption);

    // creating budget
    const html = `
    <div class="existing-budget-col">
          <h2 class="text-black-100 font-bold text-2xl mt-space-base">Existing Budget</h2>
          <div
            class="p-space-2xl bg-white-100 rounded-2xl w-full shadow-shadow-l mt-space-base"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-semibold text-red-500 text-xl">${budgetName}</h3>
              <div>
                <span class="text-red-400 font-semibold text-xl"
                  >$${new Intl.NumberFormat("en-US").format(Number(budgetAmount))}
                </span>
                <span class="text-red-400">budgeted</span>
              </div>
            </div>
            <div
              class="w-full h-3 bg-red-200 rounded-full overflow-hidden mt-space-2xl"
            >
              <div
                class="h-full w-0 bg-red-500 transition-all duration-300 ease-in"
              ></div>
            </div>
            <div class="flex items-center justify-between mt-space-2xl">
              <div>
                <span class="text-red-400 font-semibold">$9.47</span>
                <span class="text-red-400">spent</span>
              </div>
              <div>
                <span class="font-semibold">$1000 </span>
                <span>remaining</span>
              </div>
            </div>
          </div>
        </div>
    `;
    existingBudgetContainer.insertAdjacentHTML("beforeend", html);
  });
};

export default createBudget;
