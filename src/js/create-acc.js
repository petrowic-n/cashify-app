const createAcc = () => {
  // DOM elements
  const createAccContainer = document.querySelector(".form-create-acc");
  const createAccInput = document.getElementById("input-create-acc");
  const userName = document.getElementById("user-name");
  const heroSection = document.getElementById("hero-section");
  const appContainer = document.getElementById("app");

  // Event listener for create account btn using event delegation
  createAccContainer.addEventListener("click", (e) => {
    const createAccBtn = e.target.closest("#create-acc-btn");

    if (!createAccBtn) return;
    heroSection.classList.add("hidden");
    appContainer.classList.remove('hidden')
    userName.textContent = createAccInput.value;
  });
};

export default createAcc;
