const drkBtn= document.querySelector('.dark-button')

function toggleDarkMode(){
   var element =document.body;
   element.classList.toggle("dark"); 
   if(drkBtn.innerHTML==="D"){
   drkBtn.innerHTML = "L";
}else{drkBtn.innerHTML="D";}

}