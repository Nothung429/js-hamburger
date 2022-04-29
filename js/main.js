// 1. aprire il burger menu (quando si arriva a risoluzione tablet/mobile)
const mobileMenuopen = document.getElementById("open-menu")
const burgerButton = document.getElementById("open-burger")
mobileMenuopen.addEventListener("click",
    function(){
        burgerButton.style.display = "block";
        console.log(mobileMenuopen);
    }
);
// 2. chiudere il burger menu
const mobileMenuclose = document.getElementById("close-menu")
mobileMenuclose.addEventListener("click",
    function(){
        burgerButton.style.display = "none";
        console.log(mobileMenuclose);
    }
);