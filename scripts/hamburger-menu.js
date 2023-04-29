// [All Pages] Header & Navigation - Hamburger Menu at 550px Width
const hamburgerMenuIcon = document.querySelector("#hamburger-menu-icon");
const openHamburgerMenu = () => {
  const navigationContainer = document.querySelector(".navigation-container");
  navigationContainer.classList.toggle("mobile-menu");
}
hamburgerMenuIcon.addEventListener("click", openHamburgerMenu);