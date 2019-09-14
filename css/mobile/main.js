// DOM
let mobile = document.querySelector(".mobile");
let btn = document.querySelector(".btn");

btn.addEventListener("click", menuResponsivo);
// Funcao
function menuResponsivo() {
  mobile.classList.toggle("remove");
  console.log(mobile);
}
