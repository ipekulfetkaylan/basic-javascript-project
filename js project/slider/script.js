const prevEl= document.querySelector(".prev");
const nextEl= document.querySelector(".next");
const imageContainerEl= document.querySelector(".image-container");
const imgsEl= document.querySelectorAll("img")

let currentImg= 1; 
let timeout;

nextEl.addEventListener("click", ()=>{
  currentImg++
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", ()=>{
    currentImg--
    clearTimeout(timeout);
    updateImg();
})

updateImg();

function updateImg(){
    if(currentImg > imgsEl.length){
        currentImg= 1;
    }else if(currentImg < 1) {
        currentImg= imgsEl.length;   
    }

    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px) `; 

    timeout= setTimeout(()=>{
        currentImg++
        updateImg();
    },3000)
}

