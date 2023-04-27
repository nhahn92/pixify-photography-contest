const aboutUsSubmitButton = document.querySelector("#about-us-submit-button");
const detailsPageButtons = document.querySelectorAll(".details-page-button");
const detailsPageImageContainer = document.querySelector("#current-image-container");
const themeButton = document.querySelector(".theme-button");

let aboutUsUrl = window.location.href.indexOf("about-us.html");
let detailsUrl = window.location.href.indexOf("details.html");

const toggleTheme = () => {
  const body = document.querySelector("body");
  const heading1 = document.querySelector("h1");
  const paragraph = document.querySelectorAll("p");

  // Light Mode
  if (body.style.backgroundColor === "var(--dark-blue)") {
    body.style.backgroundColor = "var(--white)";
    heading1.style.color = "var(--black)";
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.color = "var(--black)";
    }
    themeButton.innerHTML = "Dark Mode";

    // Changes elements on the About Us Page if the current URL matches
    if (aboutUsUrl > -1) {
      aboutUsSubmitButton.style.border = "none";
    }

    // Changes elements on the Details Page if the current URL matches
    if (detailsUrl > -1) {
        detailsPageImageContainer.style.color = "var(--black)";
        for (let i = 0; i < detailsPageButtons.length; i++) {
            detailsPageButtons[i].style.border = "none";
        }
      }
    // Dark Mode
  } else {
    body.style.backgroundColor = "var(--dark-blue)";
    heading1.style.color = "var(--white)";
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.color = "var(--white)";
    }
    themeButton.innerHTML = "Light Mode";

    // Changes elements on the About Us Page if the current URL matches
    if (aboutUsUrl > -1) {
      aboutUsSubmitButton.style.border = "2px solid var(--cyan)";
    }

    // Changes elements on the Details Page if the current URL matches
    if (detailsUrl > -1) {
        detailsPageImageContainer.style.color = "var(--white)";
        for (let i = 0; i < detailsPageButtons.length; i++) {
            detailsPageButtons[i].style.border = "2px solid var(--cyan)";
        }
    }
  }
};
themeButton.addEventListener("click", toggleTheme);