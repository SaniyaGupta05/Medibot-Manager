document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const loginTab = document.getElementById("login-tab");
    const signupTab = document.getElementById("signup-tab");
    const formTitle = document.getElementById("form-title");
    const formBtn = document.getElementById("form-btn");
    const passwordInput = document.getElementById("password");
    const togglePasswordIcon = document.querySelector(".toggle-password");

    // Tab Switching Function
    function switchTab(tab) {
        if (tab === "login") {
            loginTab.classList.add("active");
            signupTab.classList.remove("active");
            formTitle.innerText = "Log In";
            formBtn.innerText = "LOG IN";
        } else {
            signupTab.classList.add("active");
            loginTab.classList.remove("active");
            formTitle.innerText = "Sign Up";
            formBtn.innerText = "SIGN UP";
        }
    }

    // Toggle Password Visibility
    function togglePassword() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordIcon.innerText = "👁️‍🗨️"; // Change icon
        } else {
            passwordInput.type = "password";
            togglePasswordIcon.innerText = "👁️"; // Change back
        }
    }

    // Attach event listeners
    loginTab.addEventListener("click", () => switchTab("login"));
    signupTab.addEventListener("click", () => switchTab("signup"));
    togglePasswordIcon.addEventListener("click", togglePassword);
});
