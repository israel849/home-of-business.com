// logout.js

document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutButton");

    // Add event listener to logout button
    logoutButton.addEventListener("click", () => {
        // Clear user data from localStorage
        localStorage.removeItem("loggedInUser");

        // Redirect to login page
        window.location.href = "login.html";
    });
});
