import { emailInput, passwordInput, form } from "./switchers.js";

const loginBtn = document.querySelector(".submit_btn");
const loader = document.querySelector(".loader");

const login = async (username, password) => {
  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username, //sophia.brown@x.dummyjson.com - test email, which converts in sophiab (dummy API get only username)
        password, // sophiabpass - test password
      }),
    });
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.error(
      `An account with usrname: ${username}, password: ${password} is not registered`,
      err
    );
    throw err;
  }
};

const authorization = () => {
  loginBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    loader.classList.remove("hidden");
    try {
      const [name, surname] = emailInput.value.split("@")[0].split(".");
      const username = name + surname[0];
      try {
        await login(username, passwordInput.value);
        form.classList.add("hidden");
        emailInput.value = "";
        passwordInput.value = "";
        alert("Authorization succeeded");
      } catch (err) {
        console.error(err);
        emailInput.value = "";
        passwordInput.value = "";
        alert("Authorization failed, try again");
      }
    } catch (err) {
      emailInput.value = "";
      passwordInput.value = "";
      alert("Email is incorrect, it should be name.surname@example.com");
      console.log("Email is incorrect, it should be name.surname@example.com");
    } finally {
      loader.classList.add("hidden");
    }
  });
};

export default authorization;
