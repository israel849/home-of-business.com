// setup.js

// Check if user is logged in
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
        // If user is on login/signup page but already logged in, redirect to index.html
        const currentPage = window.location.pathname;
        if (currentPage.includes("login.html") || currentPage.includes("signup.html")) {
            window.location.href = "index.html";
        }

        // Optional: update greeting if you're using this on index.html
        const nameDisplay = document.getElementById("userName");
        if (nameDisplay) {
            nameDisplay.textContent = user.email.split("@")[0]; // show name before '@'
        }
    } else {
        // If not logged in and not on login or signup, redirect to login.html
        const isPublicPage = ["login.html", "signup.html", "index.html"].some(page => window.location.pathname.includes(page));
        if (!isPublicPage) {
            window.location.href = "login.html";
        }
    }
});
