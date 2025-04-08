export const countcartItems = (arr_productsLS) => {
  let count = 0;

  arr_productsLS.forEach((product) => {
    count += product.quantity;
  });
  // console.log("totalcount : ", count);
  if (count > 0) {
    document.querySelector(".nav_right a i span").textContent = count;
    document.querySelector(".nav_right a i span").style.opacity = 1;
  }
  localStorage.setItem("totalCount", count);
};
