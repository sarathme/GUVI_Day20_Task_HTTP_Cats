const tabNav = document.querySelector(".tabs-container");
const tabContents = document.querySelectorAll(".tab-content");
const tabPanel = document.querySelector(".tabs__panel");
const slider = document.querySelector(".tab-slider");

tabNav.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("li");
  if (!clickedTab) return;
  const clickedTabId = clickedTab.dataset.tabTarget;
  tabContents.forEach((tabContent) => tabContent.classList.remove("active"));
  const tabIndex = +clickedTabId.slice(0, 1) - 1;

  slider.style.transform = `translateX(${tabIndex * 100}%)`;
  document.getElementById(clickedTabId).classList.add("active");
});

tabPanel.addEventListener("click", (e) => {
  const btnClicked = e.target.closest(".statusCode");
  if (!btnClicked) return;
  e.preventDefault();

  const statusCode = btnClicked.innerText;
  const img = btnClicked
    .closest(".tab-content")
    .querySelector(".img-block img");
  console.log(img);
  const btnGroup = btnClicked
    .closest(".status-code-block")
    .querySelectorAll("button");
  btnGroup.forEach((btn) => btn.classList.remove("active"));
  btnClicked.classList.add("active");
  console.log(statusCode);
  const alt = `Cat Image for status code ${statusCode}`;
  const url = `https://http.cat/${statusCode}.jpg`;
  img.src = url;
  img.setAttribute("alt", alt);
});
