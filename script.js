function myFunction() {
    let x = document.querySelector(".floated-block");
    x.classList.contains('responsive')
    ? x.classList.remove('responsive')
    : x.classList.add('responsive');
    /*if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }*/
}