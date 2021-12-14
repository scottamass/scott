const drkBtn= document.querySelector('.dark-button')


function toggleDarkMode(){
 
   if(document.documentElement.classList.contains("light")){
   drkBtn.innerHTML = "L";
   document.documentElement.classList.remove("light")
   document.documentElement.classList.add("dark")
}else if(document.documentElement.classList.contains("dark")){
    drkBtn.innerHTML = "D";
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")    
}else{
    if(window?.matchMedia('(prefers-color-scheme:dark)').matches){
        document.documentElement.classList.add('light')
    }else {document.documentElement.classList.add('dark')

    }
}

}