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
<<<<<<< HEAD

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
=======
const buttons = document.querySelectorAll(".hello");
/*button.addEventListener("click",()=> {
  console.log("clicked")
})*/
buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener("click",()=> {
    console.log("clicked")
  })
})

console.log(buttons)
>>>>>>> c350df2f81347f239603e425ca52a39bb029bd73

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
