// import { products } from "../data/products.json";
import { countcartItems } from "./countCart_items.js";
import { cartPageDisplay } from "./cart_display.js";

export const addToCart = (e, id, products) => {
  // console.log("added", id);

  let arr_productsLS = JSON.parse(localStorage.getItem("added_products")) || [];

  const findProduct = arr_productsLS.find((product) => product.id === id);

  if (findProduct) {
    findProduct.quantity += 1;
  } else {
    const newProduct = products.find((product) => product.id === id);
    if (newProduct) {
      arr_productsLS.push({ ...newProduct, quantity: 1 });
    }
  }
  // console.log(arr_productsLS);

  localStorage.setItem("added_products", JSON.stringify(arr_productsLS));

  countcartItems(arr_productsLS);
  if (document.querySelector(".listItem_ctn")) {
    cartPageDisplay(arr_productsLS);
  }
};
