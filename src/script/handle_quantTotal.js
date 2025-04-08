import { countcartItems } from "./countCart_items.js";
import { cartPageDisplay } from "./cart_display.js";

export const handlingQuant_Total = (arr_productsLS, cartItem_ctn) => {
  const cart_items = cartItem_ctn.querySelectorAll(".cart_listItem");
  const subtotal_text = document.querySelector(".subtotal p");
  const gst_text = document.querySelector(".gst p");
  const fee_ctn = document.querySelector(".fee");
  const fee_text = document.querySelector(".fee p");
  const total_text = document.querySelector(".total p");

  const calculatePrice = () => {
    if (arr_productsLS.length === 0) {
      subtotal_text.textContent = "$0";
      gst_text.textContent = "$0";
      fee_ctn.style.display = "none";
      total_text.textContent = "$0";
      return; // Stop the rest of the function
    }

    let subtotal = Math.floor(
      arr_productsLS.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
    );
    let gstCalc = (subtotal * 12) / 100;
    let delivery_fee = subtotal < 100 ? 6 : 0;

    subtotal_text.textContent = `$${subtotal}`;
    gst_text.textContent = `$${gstCalc}`;

    if (subtotal < 100) {
      fee_text.textContent = `$${delivery_fee}`;
      fee_ctn.style.display = "block";
    } else {
      fee_ctn.style.display = "none";
    }
    // arr_productsLS.length < 1 ? fee_ctn.style.display = "none"

    total_text.textContent = `$${subtotal + gstCalc + delivery_fee}`;
  };
  calculatePrice();

  cart_items.forEach((item) => {
    item.addEventListener("click", (e) => {
      const curr_item = arr_productsLS.find(
        (curr) => curr.id === Number(item.id)
      );

      const index = arr_productsLS.findIndex(
        (item) => item.id === curr_item.id
      );

      console.log("curr_item : ", curr_item);

      if (e.target.classList.contains("ri-add-line")) {
        curr_item.quantity++;
        item.querySelector(".quantity p").textContent = curr_item.quantity;
      } else if (e.target.classList.contains("ri-subtract-line")) {
        if (curr_item.quantity > 1) {
          curr_item.quantity--;
          item.querySelector(".quantity p").textContent = curr_item.quantity;
        } else {
          arr_productsLS.splice(index, 1);
        }
      } else if (e.target.classList.contains("ri-delete-bin-6-line")) {
        arr_productsLS.splice(index, 1);
      }

      localStorage.setItem("added_products", JSON.stringify(arr_productsLS));
      cartPageDisplay(arr_productsLS);
      countcartItems(arr_productsLS);
      calculatePrice();
    });
  });
};
