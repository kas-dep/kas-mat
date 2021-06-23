const element = document.querySelector(".element");
element.addEventListener("click", () => {
  alert("Element 3 clicked");
});
const title = document.querySelector(".title");
title.addEventListener("mouseover", () => {
  title.classList.add("over");
});
title.addEventListener("mouseleave", () => {
  title.classList.remove("over");
});
