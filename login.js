document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("Password");
    const loginBtn = document.getElementById("loginBtn");

    // Function to enable/disable the login button based on form input
    function checkForm() {
        const emailFilled = emailInput.value.trim() !== "";
        const passwordFilled = passwordInput.value.trim() !== "";
        loginBtn.disabled = !(emailFilled && passwordFilled);
    }

    emailInput.addEventListener("input", checkForm);
    passwordInput.addEventListener("input", checkForm);

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if user exists and password matches
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login successful!");
            window.location.href = "index.html"; // Redirect to the homepage after successful login
        } else {
            alert("Invalid email or password.");
        }
    });
});
