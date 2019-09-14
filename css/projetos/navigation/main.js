// create function to select elements
const selectElement = element => document.querySelector(element);

// call selectElement function then values into variables
const header = selectElement("header");
const mainContent = selectElement("main");

// Click event on hamburguer menu to trigger the .active state
selectElement(".hamburguer").addEventListener("click", () => {
  header.classList.toggle("active");
  mainContent.classList.toggle("active");
});

// close sidebar when clicking outside of it
window.onclick = event => {
  if (event.target.matches(".active")) {
    if (header.classList.contains("active")) {
      header.classList.remove("active");
      mainContent.classList.remove("active");
    }
  }
};
