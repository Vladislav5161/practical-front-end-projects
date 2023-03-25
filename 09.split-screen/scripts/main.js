const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

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