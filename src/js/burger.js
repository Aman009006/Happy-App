export const getBurger = () => {
  let linksLi = document.querySelectorAll(".burger__li");
  linksLi.forEach((el) =>
    el.addEventListener("click", function () {
      menuBtn.classList.toggle("active");
      menu.classList.toggle("active");
    })
  );
  let menuBtn = document.querySelector(".burgerMenu");
  let menu = document.querySelector(".navbar__ul");
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
};
