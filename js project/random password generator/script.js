const btnEl= document.querySelector(".btn");
const inputEl= document.getElementById("input");
const copyIconEl= document.querySelector(".fa-copy");
const alertContainerEl= document.querySelector(".alert-container")

btnEl.addEventListener("click",()=>{
    createPassword()
});

copyIconEl.addEventListener("click", ()=>{
    copyPassword();
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
    
        },2000);
    }
   

});


function createPassword(){
    const chars="0123456789abcdefghijklmnoprstuwxvyz!@$%#*|^_?:{}^#ABCDEFGHIJKLMNOPRSTUWXVYZ"
    const passwordLenght= 14;
    let password="";
    for( let index=0; index < passwordLenght; index++){
        const randomNum= Math.floor (Math.random()* chars.length);
        password += chars.substring(randomNum, randomNum+ 1);//substring başlangıç ve bitiş parametresi alır ve parametre aralığındaki değerleri seçer
    }
    inputEl.value= password;
    alertContainerEl.innerText= password + " "+ "copied!"

}

function copyPassword(){

    inputEl.select();//input içindeki kopyalanacak değeri seçen kod
    inputEl.setSelectionRange(0,9999); //sadece mobil için onun dışında kullanmaya gerek yok.
    navigator.clipboard.writeText(inputEl.value);//input.value değerini panoya yazan kod
  
}


