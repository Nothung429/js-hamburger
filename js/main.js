// 1. aprire il burger menu (quando si arriva a risoluzione tablet/mobile)
const mobileMenuopen = document.getElementById("open-menu")
mobileMenuopen.addEventListener("click",
    function(){
        console.log(mobileMenuopen);
        document.getElementById("open-burger").style.display = "block";
    }
);
// 2. chiudere il burger menu
const mobileMenuclose = document.getElementById("close-menu")
mobileMenuclose.addEventListener("click",
    function(){
        console.log(mobileMenuclose);
        document.getElementById("open-burger").style.display = "none";
    }
);