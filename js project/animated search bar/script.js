const searchBarContainerEl= document.querySelector(".seacrh-bar-container");
const magnifierEl= document.querySelector(".magnifier");

magnifierEl.addEventListener("click", ()=> {
    searchBarContainerEl.classList.toggle("active");
})