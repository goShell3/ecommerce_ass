// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-project-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM Elements
const authModal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const authToggle = document.getElementById("authToggle");
const userMenu = document.getElementById("userMenu");
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// Show/Hide Auth Modal
function toggleAuthModal() {
    authModal.style.display = authModal.style.display === "flex" ? "none" : "flex";
}

// Handle Login
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        toggleAuthModal();
        alert("Logged in successfully!");
    } catch (error) {
        alert(error.message);
    }
});

// Handle Registration
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    try {
        await auth.createUserWithEmailAndPassword(email, password);
        toggleAuthModal();
        alert("Account created successfully!");
    } catch (error) {
        alert(error.message);
    }
});

// Handle Logout
logoutBtn.addEventListener("click", async () => {
    try {
        await auth.signOut();
        alert("Logged out successfully!");
    } catch (error) {
        alert(error.message);
    }
});

// Auth State Observer
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        document.querySelector(".auth-btn").style.display = "none";
        userMenu.style.display = "flex";
        userEmail.textContent = user.email;
        document.getElementById("openCheckout").disabled = false;
    } else {
        // User is signed out
        document.querySelector(".auth-btn").style.display = "block";
        userMenu.style.display = "none";
        document.getElementById("openCheckout").disabled = true;
    }
});

// Toggle between Login and Register forms
authToggle.addEventListener("click", () => {
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
    authToggle.textContent = authToggle.textContent === "Register" ? "Login" : "Register";
});
