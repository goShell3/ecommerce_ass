// Sample Product Data with Categories
const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, category: "electronics", image: "headphones.jpg" },
    { id: 2, name: "Smart Watch", price: 199.99, category: "electronics", image: "smartwatch.jpg" },
    { id: 3, name: "Laptop Backpack", price: 49.99, category: "accessories", image: "backpack.jpg" },
    { id: 4, name: "Bluetooth Speaker", price: 79.99, category: "electronics", image: "speaker.jpg" },
    { id: 5, name: "Cotton T-Shirt", price: 24.99, category: "clothing", image: "tshirt.jpg" },
    { id: 6, name: "Denim Jeans", price: 59.99, category: "clothing", image: "jeans.jpg" },
    { id: 7, name: "Leather Wallet", price: 34.99, category: "accessories", image: "wallet.jpg" },
    { id: 8, name: "Running Shoes", price: 89.99, category: "clothing", image: "shoes.jpg" },
];

let cart = [];

// DOM Elements
const productGrid = document.getElementById("productGrid");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.querySelector(".cart-count");
const filterButtons = document.querySelectorAll(".filter-btn");
const checkoutForm = document.getElementById("checkoutForm");
const openCheckoutBtn = document.getElementById("openCheckout");

// Load Products
function loadProducts(category = "all") {
    const filteredProducts = category === "all" 
        ? products 
        : products.filter(product => product.category === category);

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="assets/images/${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `).join("");
}

// Filter Products by Category
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const category = button.getAttribute("data-category");
        loadProducts(category);
    });
});

// Open/Close Cart
document.querySelector(".cart-icon").addEventListener("click", () => {
    cartModal.style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", () => {
    cartModal.style.display = "none";
});

// Add to Cart
productGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const productId = parseInt(e.target.getAttribute("data-id"));
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
    }
});

// Remove from Cart
cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
        const productId = parseInt(e.target.getAttribute("data-id"));
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }
});

// Update Cart UI
function updateCart() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="assets/images/${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <p class="cart-item-title">${item.name}</p>
                <p class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <i class="fas fa-times remove-item" data-id="${item.id}"></i>
        </div>
    `).join("");

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Load Cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Open Checkout Form
openCheckoutBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
    checkoutForm.style.display = "flex";
});

// Initialize
loadProducts();
loadCart(); 