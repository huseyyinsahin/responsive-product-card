const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const select = document.getElementById("select");

button1.addEventListener("click", () => {
  button1.classList.add("add-color");
  button2.classList.remove("add-color");
  button3.classList.remove("add-color");
  select.classList.add("select-show");
});

button2.addEventListener("click", () => {
  button1.classList.remove("add-color");
  button2.classList.add("add-color");
  button3.classList.remove("add-color");
  select.classList.add("select-show");
});

button3.addEventListener("click", () => {
  button1.classList.remove("add-color");
  button2.classList.remove("add-color");
  button3.classList.add("add-color");
  select.classList.add("select-show");
});
