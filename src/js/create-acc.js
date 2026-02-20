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
    const name = createAccInput.value;

    if (!createAccBtn) return;
    // hiding hero section & showing app container
    heroSection.classList.add("hidden");
    appContainer.classList.remove('hidden')

    // adding name into app
    userName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  });
};

export default createAcc;
