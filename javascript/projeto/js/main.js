const nav = document.querySelector("#nav-list");
const li = document.querySelector(".header-item");
const body = document.querySelector("body");
const logo = document.querySelector(".header-logo");

li.addEventListener("click", onBody);
function onBody() {
  body.style.backgroundColor = "skyblue";
  logo.style.color = "#fff";
}
