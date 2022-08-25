const menuEl= document.querySelector(".menu");
const menuText= document.querySelector(".menu p");
const socialListEl= document.querySelector(".social-lists");
const liEls=document.querySelectorAll(".social-lists li");


menuEl.addEventListener("click", ()=>{
    socialListEl.classList.toggle("hide"); //toggle bir class ekliyor aynı zamanda çıkarıyor
    menuEl.classList.toggle("rotate");
});

liEls.forEach(liEls=>{
    liEls.addEventListener("click", ()=>{
        menuText.innerHTML= liEls.innerHTML
        socialListEl.classList.add("hide");//bir class ekliyor eklenen classı ancak remove ile kaldırabilirsin
        menuEl.classList.toggle("rotate");
    });
});