const element = document.querySelector(".element");
element.addEventListener("click", () => {
  alert("Element 3 clicked");
});
const element = document.querySelector('.btn');
const title = document.querySelector(".title");
title.addEventListener("mouseover", () => {
  title.classList.add("over");
});
title.addEventListener("mouseleave", () => {
  title.classList.remove("over");
});
element.addEventListener('click',()=>{
    alert('Element 3 clicked');
})
btn.addEventListener('click',()=>{
    alert('Button z taska 7 clicked!');
})

