const burgerBtn = document.querySelector(".burger_btn");
const loginBtn = document.querySelector(".login_btn");
const cancelBtn = document.querySelector(".cancel_btn");
export const form = document.querySelector("form");
const tabLinks = document.querySelectorAll(".menu li a");
export const emailInput = document.querySelector('#email input');
export const passwordInput = document.querySelector('#password input');

export const chooseActiveTab = () => {
  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", () => {
      const previousActiveTab = document.querySelector(".active_tab");
      if (previousActiveTab) {
        previousActiveTab.classList.remove("active_tab");
      }
      const tab = tabLink.parentElement;
      tab.classList.add("active_tab");
    });
  });
};

export const openBurgerMenu = () => {
  burgerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    burgerBtn.classList.toggle("active");
  });
};

export const toggleAuthorizationForm = () => {
  loginBtn.addEventListener("click", () => {
    form.classList.remove("hidden");
    burgerBtn.classList.toggle("active");
  });

  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    emailInput.value = '';
    passwordInput.value = '';
    form.classList.add("hidden");
  });
};
