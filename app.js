function nameValidate() {
  const userName = document.getElementById("username");
  if (userName.value.length < 5) {
    document.getElementById("nameError").style.display = "block";
  } else {
    document.getElementById("submitButton").disabled = false;
  }
}

const emailValidate = () => {
  const emailInput = document.getElementById("email");
  if (!emailInput.value.includes("@")) {
    document.getElementById("emailError").style.display = "block";
  } else {
    document.getElementById("submitButton").disabled = false;
  }
};

const passwordValidate = () => {
  const passwordInput = document.getElementById("password");
  if (passwordInput.value.length < 8) {
    document.getElementById("passwordError").style.display = "block";
  } else {
    document.getElementById("submitButton").disabled = false;
  }
};

let currentAction = "signup";

const toggleAction = () => {
  if (currentAction === "signup") {
    document.getElementById("sign-in").innerText = "Sign Up";
    currentAction = "signin";
    document.getElementById("username-div").style.display = "none";
    document.getElementById("account").innerText = "Don't Have an Account ?";
  } else {
    document.getElementById("sign-in").innerText = "Sign In";
    currentAction = "signup";
    document.getElementById("username-div").style.display = "block";
    document.getElementById("account").innerText = "Already Have an Account ?";
  }
};
