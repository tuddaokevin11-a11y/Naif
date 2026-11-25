
// Get HTML elements
const accountForm = document.getElementById("accountForm");
const newEmail = document.getElementById("newEmail");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const createMessage = document.getElementById("createMessage");

// Create a new account
if (accountForm) {
    accountForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get input values
        const email = newEmail.value.trim();
        const password = newPassword.value;
        const confirm = confirmPassword.value;

        // Get saved accounts
        let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

        // Check if passwords match
        if (password !== confirm) {
            createMessage.textContent = "Passwords do not match.";
            return;
        }

        // Check if account already exists
        if (accounts.some(user => user.email.toLowerCase() === email.toLowerCase())) {
            createMessage.textContent = "This account already exists.";
            return;
        }

        // Save the new account
        accounts.push({
            email: email,
            password: password
        });

        localStorage.setItem("accounts", JSON.stringify(accounts));

        // Set login status
        localStorage.setItem("loggedIn", "true");

        // Redirect to main webpage
        window.location.href = "main.html";
    });
}