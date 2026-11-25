// Create a default account if no accounts exist
function createDefaultAccount() {
    if (!localStorage.getItem("accounts")) {
        const defaultAccount = [
            {
                email: "Admin",
                password: "Server1"
            }
        ];

        localStorage.setItem("accounts", JSON.stringify(defaultAccount));
    }
}

// Login function
function login() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const loginMessage = document.getElementById("loginMessage");

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const account = accounts.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (account) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "main.html";
    } else {
        loginMessage.textContent = "Incorrect email or password.";
    }
}

// Get the login form
const loginForm = document.getElementById("loginForm");

// Create the default account
createDefaultAccount();

// Run login when the form is submitted
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        login();
    });
}