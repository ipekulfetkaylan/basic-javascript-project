const hourEl= document.getElementById("hour");
const mınuteEl= document.getElementById("minute");
const secondEl= document.getElementById("second");
const ampmEl= document.getElementById("ampm");
const bodyEl= document.getElementById("body");

function updateClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm= "AM"

    if(h > 12){
        h= h-12
        ampm= "PM"
        bodyEl.style.backgroundImage = "url(bg3.jpg)";
    }

    h= h< 10 ? "0" + h: h; //digital saate 0 ekliyor
    m= m< 10 ? "0" + m: m;
    s= s< 10 ? "0" + s: s;
   

    hourEl.innerText= h;
    mınuteEl.innerText= m;
    secondEl.innerText= s;
    ampmEl.innerText= ampm;

    setTimeout(()=>{

    updateClock()
    },1000)
}

updateClock();