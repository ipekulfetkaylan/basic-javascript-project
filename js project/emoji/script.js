const starEl= document.querySelectorAll(".fa-star");
const emojiEl= document.querySelectorAll(".fa-regular");
const colorsArray= ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);


starEl.forEach((starEl, index)=>{
    starEl.addEventListener("click", ()=>{
        updateRating(index)
    });
})

function updateRating(index){
    starEl.forEach((starEl, idx)=>{
    if(idx < index +1){
        starEl.classList.add("active");
    }else{
        starEl.classList.remove("active");
    }
    });

    emojiEl.forEach(emojiEl=>{
        emojiEl.style.transform= `translateX(-${index* 50}px)`;
        emojiEl.style.color= colorsArray[index];
    })
}
