// Selecting the needed elements for User experience and UI.
const tabNav = document.querySelector(".tabs-container");
const tabContents = document.querySelectorAll(".tab-content");
const tabPanel = document.querySelector(".tabs__panel");
const slider = document.querySelector(".tab-slider");

// The below event listener is used to implement switching tabs in the UI
tabNav.addEventListener("click", (e) => {
  //Getting only the tab element list element.
  const clickedTab = e.target.closest("li");

  // If any other element is clicked we do nothing
  if (!clickedTab) return;

  // Getting the tab ID
  const clickedTabId = clickedTab.dataset.tabTarget;

  // Reseting active state in all tabs.
  tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

  // Calculating tab index using id.
  const tabIndex = +clickedTabId.slice(0, 1) - 1;

  // This is to add some nice effect during tab switch.
  slider.style.transform = `translateX(${tabIndex * 100}%)`;

  // Adding active class for the clicked tab.
  document.getElementById(clickedTabId).classList.add("active");
});

// This event listerner is to fetch and display cats image.
tabPanel.addEventListener("click", (e) => {
  // This is to ensure only the button is clicked and nothing else.
  const btnClicked = e.target.closest(".statusCode");
  if (!btnClicked) return;
  e.preventDefault();

  // Getting the status code
  const statusCode = btnClicked.innerText;

  // Selecting the image element
  const img = btnClicked
    .closest(".tab-content")
    .querySelector(".img-block img");

  // Reseting active state in all buttons.
  const btnGroup = btnClicked
    .closest(".status-code-block")
    .querySelectorAll("button");
  btnGroup.forEach((btn) => btn.classList.remove("active"));

  // Making the clicked button active
  btnClicked.classList.add("active");

  // Creating the source and alt value for the image.
  const alt = `Cat Image for status code ${statusCode}`;
  const url = `https://http.cat/${statusCode}.jpg`;

  // Attaching the alt and source value to the image.
  img.src = url;
  img.setAttribute("alt", alt);
});
