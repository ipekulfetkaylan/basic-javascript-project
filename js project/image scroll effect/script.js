const bgImageEl= document.getElementById("bg-image");

window.addEventListener("scroll", ()=>{
    updateImage();
});

function updateImage(){
    bgImageEl.style.opacity = 1- window.pageYOffset / 1000; 
    bgImageEl.style.backgroundSize= 160 - window.pageYOffset / 12 + "%" ; 
}