const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".hello_button");
const totalButtonsNumber = buttons.length;
let hiddenButtons = 0;

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

//buttons.forEach((button) => {
// button.addEventListener("click", () => {
//  button.classList.add("hidden");
//   hiddenButtons++;
//  if (hiddenButtons === totalButtonsNumber) {
//   buttons.forEach(function (button) {
//    button.classList.remove("hidden");
//  });
//  hiddenButtons = 0;
//  }
// });
//});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("hello-click");
  });
});
