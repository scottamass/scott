const navigation = document.querySelector(".navigation");
const navButton = document.querySelector(".toggle-button");


navButton.addEventListener('click',() => {
    navigation.classList.toggle('active')
    
})