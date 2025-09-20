const productUpload = document.getElementById("productUpload");
const productImage = document.getElementById("productImage");
const caption = document.getElementById("caption");
const tryOnBtn = document.getElementById("tryOnBtn");
const addToCartBtn = document.getElementById("addToCartBtn");
const removeBtn = document.getElementById("removeBtn");
const cartMessage = document.getElementById("cartMessage");

// Show uploaded image
productUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            productImage.src = event.target.result;
            productImage.style.display = "block";
            productImage.style.transform = "rotateY(0deg)"; // reset rotation
            caption.innerText = "AI Caption: Beautiful handcrafted product!";
            tryOnBtn.style.display = "inline-block";
            addToCartBtn.style.display = "inline-block";
            removeBtn.style.display = "inline-block";
            cartMessage.innerText = "";
        }
        reader.readAsDataURL(file);
    }
});

// Try-on simulation
tryOnBtn.addEventListener("click", () => {
    productImage.style.transition = "transform 0.6s";
    productImage.style.transform = "rotateY(180deg)";
    setTimeout(() => {
        productImage.style.transform = "rotateY(0deg)";
    }, 600);
});

// Add to Cart simulation
addToCartBtn.addEventListener("click", () => {
    cartMessage.innerText = "✅ Product added to cart!";
});

// Remove Product
removeBtn.addEventListener("click", () => {
    productImage.src = "";
    productImage.style.display = "none";
    caption.innerText = "";
    tryOnBtn.style.display = "none";
    addToCartBtn.style.display = "none";
    removeBtn.style.display = "none";
    cartMessage.innerText = "";
    productUpload.value = ""; // reset file input
});
