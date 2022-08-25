const formEl= document.querySelector(".form");
const alertEl= document.querySelector(".alert");
const alertSuccessEl= document.querySelector(".alert-success");
const inputEl= document.querySelector(".input");
const ulEl= document.querySelector(".list");

let list= JSON.parse(localStorage.getItem("list"));

if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

function showAlert(){
    if(inputEl.value=== ""){
        alertEl.style.display="block";
        setTimeout(()=>{
            alertEl.style.display="none";
        },2000);
    }else{
        alertSuccessEl.style.display="block";
        setTimeout(()=>{
            alertSuccessEl.style.display="none";
        },2000);

    }

}

formEl.addEventListener("submit", (event)=> {
    showAlert();
    event.preventDefault();
    toDoList()
});

function toDoList(task){
    
   let newTask= inputEl.value;
   if(task){
    newTask= task.name
   }
   
   const liEl= document.createElement("li");
   if(task && task.checked){
    liEl.classList.add("checked");
   }

   liEl.innerText= newTask;
   ulEl.appendChild(liEl);
   inputEl.value="";

   const checkBtnEl= document.createElement("div");
   checkBtnEl.innerHTML= `<i class="fa-solid fa-check"></i> `;
   liEl.appendChild(checkBtnEl);

   const trashBtnEl= document.createElement("div");
   trashBtnEl.innerHTML= `<i class="fa-solid fa-trash"></i>`;
   liEl.appendChild(trashBtnEl);

   checkBtnEl.addEventListener("click", ()=>{
    liEl.classList.toggle("checked");
    updateLocalStorage();
   })

   trashBtnEl.addEventListener("click", ()=>{
    liEl.remove();
    updateLocalStorage();
   });
   updateLocalStorage();
};

function updateLocalStorage(){
    const liEls= document.querySelectorAll("li")
    let list= [];
    liEls.forEach(liEl=> {
        list.push({
            name:liEl.innerText, 
            checked: liEl.classList.
            contains("checked")
        })
    });
    localStorage.setItem("list", JSON.stringify(list))

}

