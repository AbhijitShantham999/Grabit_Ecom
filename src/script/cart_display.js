import { handlingQuant_Total } from "./handle_quantTotal.js";

export const cartPageDisplay = (arr_productsLS) => {
  console.log("cart_display : ", arr_productsLS);
  const cartItem_ctn = document.querySelector(".listItem_ctn");

  if (!cartItem_ctn) {
    console.warn("cartPageDisplay: .listItem_ctn not found in DOM.");
    return;
  }

  let clutter = "";

  arr_productsLS.forEach((product) => {
    clutter += `<div class="cart_listItem" id = "${product.id}">
                    <div class="listItem_img">
                    <img
                        src="${product.image}"
                        alt=""
                    />
                    <div class="listItem_name_price">
                        <h4>${product.name}</h4>
                        <p>$${product.price}</p>
                    </div>
                    </div>

                    <div class="listItem_quantity">
                    <div class="quantity">
                        <i class="ri-subtract-line"></i>
                        <p>${product.quantity}</p>
                        <i class="ri-add-line"></i>
                    </div>
                    </div>
                    <div class="listItem_subtotal">
                    <p>$${product.price}</p>
                    </div>
                    <div class="listItem_delete">
                    <i class="ri-delete-bin-6-line"></i>
                    </div>
                </div>`;
  });

  cartItem_ctn.innerHTML = clutter;

  handlingQuant_Total(arr_productsLS, cartItem_ctn);
};
