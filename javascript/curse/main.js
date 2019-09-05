// Javascript Crash Course

// DOM

// Single element
/*
document.getElementById("my-form");
document.querySelector(".container");
*/

// Multiple element
/*
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));
*/

/*
const items = document.querySelectorAll(".item");

items.forEach(item => {
  console.log(item);
});
*/

/*
const ul = document.querySelector(".items");

ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerHTML = "<h1>Hello</h1>";
ul.lastElementChild.innerText = "Brad";

const btn = document.querySelector(".btn");
btn.style.background = "red";
*/

/*
const btn = document.querySelector(".btn");

btn.addEventListener("click", e => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#ccc";

  //document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>Hello</h1>";
});
*/

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector("#msg");
const usersList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    usersList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
