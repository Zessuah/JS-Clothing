const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const popup = document.getElementById("popup");
let cart = [];

// Add to Cart
function addToCart(name, price) {
  cart.push({ name, price, id: Date.now() });
  updateCart();
  showPopup("🛒 Added to cart!", false);
}

// Remove from Cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
  showPopup("❌ Removed from cart!", true);
}

// Update Cart Display
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <div>
        <span>₱${item.price}</span>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
    cartItems.appendChild(div);
  });
  cartTotal.innerText = `Total: ₱${total}`;
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    showPopup("❌ Your cart is empty! Please add some products first.", true);
    return;
  }
  showPopup("✅ Thank you for your purchase! Your order was placed successfully 💕", false);
  cart = [];
  updateCart();
}

// Popup message
function showPopup(message, isError = false) {
  popup.textContent = message;
  popup.style.background = isError ? "#ff4d6d" : "#a7f3a2"; // red for error, green for success
  popup.style.display = "block";
  setTimeout(() => (popup.style.display = "none"), 2000);
}

console.log("JS Loaded");
