let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

function fadeOut(){
    setInterval(loader, 2500);
}
window.onload = fadeOut();