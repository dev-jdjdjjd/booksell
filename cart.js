// cart.js

// Load cart from localStorage or initialize empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add event listeners to all "Add to Cart" buttons (on browse.html)
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".book-card button");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".book-card");
      const title = card.querySelector("h3").innerText;
      const author = card.querySelector("p").innerText;
      const price = card.querySelector(".price").innerText;
      const img = card.querySelector("img").src;

      const book = { title, author, price, img };
      cart.push(book);

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`Added "${title}" to cart.`);
    });
  });
});
