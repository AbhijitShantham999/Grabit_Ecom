import { addToCart } from "./addtocart.js";

export const productDisplay = (products) => {
  if (!Array.isArray(products)) {
    console.error("Invalid products data:", products);
    return;
  }

  const products_div = document.querySelector(".product_right");
  if (!products_div) return;

  let clutter = "";
  products.forEach((product) => {
    clutter += `<div class="product">
            <div class="image_sale">
              <img
                src="${product.image}"
                alt=""
              />
              ${
                product.sale_tag
                  ? `<div class="sale_tag">
                        <h4>Sale</h4>
                    </div> `
                  : ""
              }

            </div>
            <div class="product_mid">
              <h3>${product.name}</h3>
              <div class="price">
                <h4 class="offer_price">$${product.price}</h4>
                ${
                  product.org_price
                    ? `<h5 class="org_price">$ ${product.org_price}</h5>`
                    : ""
                }
              </div>
              ${
                product.rating
                  ? `<h4 class="rating">Rating : ${product.rating}/5</h4>`
                  : `<h4 class="rating">Rating : N/A </h4>`
              }
              
              <h4 class="category">${product.category}</h4>
            </div>
            <div class="hero_btn">
              <button class = "add_cart_btn" data-id ="${
                product.id
              }">Add to Cart</button>
            </div>
          </div>`;
  });
  products_div.innerHTML = clutter;
  const addToCart_btns = document.querySelectorAll(".add_cart_btn");

  addToCart_btns.forEach((addToCart_btn) => {
    addToCart_btn.addEventListener("click", (e) => {
      const id = Number(e.target.dataset.id);
      // console.log(id, typeof id);
      addToCart(e, id,products);
    });
  });
};
