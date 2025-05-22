const checkoutForm = document.getElementById("checkout");
const cancelBtn = document.querySelector(".cancel-btn");

// Handle Checkout Submission
checkoutForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Check if user is authenticated
    const user = firebase.auth().currentUser;
    if (!user) {
        showErrorMessage("Please login to complete your purchase");
        return;
    }
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const card = document.getElementById("card").value;
    
    // Simulate payment processing
    try {
        // Here you would typically integrate with a payment processor
        // For now, we'll just simulate a successful payment
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Save order to Firebase (you would implement this)
        // await saveOrderToFirebase({
        //     userId: user.uid,
        //     items: cart,
        //     total: document.getElementById("cartTotal").textContent,
        //     shippingAddress: address,
        //     status: 'completed'
        // });
        
        showSuccessMessage("Order confirmed!");
        alert(`Order confirmed!\nName: ${name}\nEmail: ${email}\nTotal: $${document.getElementById("cartTotal").textContent}`);
        
        // Clear cart and reset form
        cart = [];
        updateCart();
        checkoutForm.reset();
        checkoutForm.style.display = "none";
    } catch (error) {
        showErrorMessage("Payment failed. Please try again.");
    }
});

// Close Checkout Form
cancelBtn.addEventListener("click", () => {
    checkoutForm.style.display = "none";
    cartModal.style.display = "flex";
});

// Update Cart (shared function)
function updateCart() {
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.querySelector(".cart-count");
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Show success message
function showSuccessMessage(message) {
    const toast = document.createElement("div");
    toast.className = "toast success";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Show error message
function showErrorMessage(message) {
    const toast = document.createElement("div");
    toast.className = "toast error";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
} 