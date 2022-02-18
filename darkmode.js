const drkBtn= document.querySelector('.dark-button')

if(localStorage.getItem("theme") == null){


localStorage.setItem("theme","light");}


let localData =localStorage.getItem("theme");

if(localData == "light"){
    drkBtn.innerHTML = "D";
    document.body.classList.remove("dark")
}
else if(localData == "dark"){
    drkBtn.innerHTML="L";
    document.body.classList.add("dark");


}

function toggleDarkMode(){
   var element =document.body;
   element.classList.toggle("dark"); 
   if   (drkBtn.innerHTML==="D"){
        drkBtn.innerHTML = "L";
        localStorage.setItem("theme","dark");}
   else
        {drkBtn.innerHTML="D";
        localStorage.setItem("theme","light");}

}