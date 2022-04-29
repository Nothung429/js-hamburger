// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Ricordate di scrivere solo il codice JavaScript e non modificare HTML e CSS
const mobileMenu = document.getElementById("open-menu")
mobileMenu.addEventListener("click",
    function(){
        console.log(mobileMenu)
        document.getElementById("open-burger").style.display = "block";
    }
);