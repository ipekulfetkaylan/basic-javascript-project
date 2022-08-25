const num1= Math.ceil (Math.random() *10);
const num2= Math.ceil(Math.random() *10);

const questionEl= document.getElementById("question");
const formEl= document.getElementById("form");
const inputEl= document.getElementById("input");
const scoreEl= document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}
scoreEl.innerText= `score: ${score}`;
questionEl.innerText= ` What is ${num1} multiplay by ${num2}?`

const correcAns= num1 * num2;


formEl.addEventListener("submit", ()=>{
  
  const userAns= +inputEl.value;//+ bir stringi sayıya dönüştürüyor
  

  if(userAns=== correcAns){
    score++
    updateLocalStorage();
  }else{
    score--
    updateLocalStorage();
  }

});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify (score));
}




