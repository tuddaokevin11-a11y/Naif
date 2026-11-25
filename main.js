// Check if the user is logged in
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// Get the logout button
const logoutButton = document.getElementById("logoutButton");

// Check if the logout button exists
if (logoutButton) {
    logoutButton.addEventListener("click", function () {
        // Remove the login status
        localStorage.removeItem("loggedIn");

        // Redirect to the login page
        window.location.href = "login.html";
    });
}