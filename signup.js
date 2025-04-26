const signupForm = document.getElementById("signupForm");
const signupBtn = document.getElementById("signupBtn");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");

function checkSignupFields() {
  signupBtn.disabled = !(signupEmail.value.trim() && signupPassword.value.trim());
}

signupEmail.addEventListener("input", checkSignupFields);
signupPassword.addEventListener("input", checkSignupFields);

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some(user => user.email === email);

  if (userExists) {
    alert("Account already exists.");
  } else {
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please log in.");
    window.location.href = "login.html";
  }
});
