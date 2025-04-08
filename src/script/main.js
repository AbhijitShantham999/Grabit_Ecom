// import "./style.css";
// import { products } from "./data/products.json";
import { productDisplay } from "./product_display.js";
import { cartPageDisplay } from "./cart_display.js";
import { countcartItems } from "./countCart_items.js";
import { handleContactForm } from "./contact_form.js";
import { handleMenu } from "./handleMenubar.js";

// productDisplay(products);

document.addEventListener("DOMContentLoaded", () => {
  handleMenu();

  // const products_div = document.querySelector(".product_right");
  const cartItem_ctn = document.querySelector(".listItem_ctn");

  fetch("./src/data/products.json")
    .then((res) => res.json())
    .then((products) => {
      // console.log("Fetched products:", products);
      const products_div = document.querySelector(".product_right");
      if (products_div) {
        productDisplay(products);
      }
    });

  if (cartItem_ctn) {
    let arr_productsLS =
      JSON.parse(localStorage.getItem("added_products")) || [];
    cartPageDisplay(arr_productsLS);
  }
  const storedProducts =
    JSON.parse(localStorage.getItem("added_products")) || [];
  countcartItems(storedProducts);

  handleContactForm();
});
