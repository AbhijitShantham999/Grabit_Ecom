export const handleMenu = () => {
  const nav_mid = document.querySelector(".nav_mid");
  const menubar = document.querySelector(".res_menubar");
  const open = document.querySelector("#menu_open");
  const close = document.querySelector("#menu_close");
  const body = document.querySelector("body");

  open.addEventListener("click", () => {
    open.style.display = "none";
    close.style.display = "block";
    nav_mid.style.left = "-1px";
    body.style.overflow = "hidden";
  });
  close.addEventListener("click", () => {
    close.style.display = "none";
    open.style.display = "block";
    nav_mid.style.left = "-100vw";
    body.style.overflow = "scroll";
  });
};
