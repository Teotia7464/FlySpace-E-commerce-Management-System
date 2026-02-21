// Initial State
let cartCount = 0;
const cartBadge = document.querySelector('.relative span');
const cartSidebar = document.getElementById('cart-sidebar');

// 1. Function to Update Cart Count
function addToCart(productName, price) {
    cartCount++;
    updateUI();

    // Optional: Visual feedback
    console.log(`Added ${productName} to cart for $${price}`);
    alert(`${productName} added to your space.`);
}

function updateUI() {
    cartBadge.innerText = cartCount;
    cartBadge.classList.add('animate-bounce');

    // Remove bounce after animation finishes
    setTimeout(() => {
        cartBadge.classList.remove('animate-bounce');
    }, 1000);
}

// 2. Toggle Cart Sidebar (Open/Close)
function toggleCart() {
    document.body.classList.toggle('cart-open');
}

// 3. Event Listeners for Product Buttons
// Note: In your HTML, add 'onclick' to your buttons or use querySelectors
document.querySelectorAll('.group').forEach((card, index) => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        const price = card.querySelector('.font-bold').innerText;
        addToCart(title, price);
    });
});