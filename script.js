// "use strict";
// let numbers = "";
// let operator = "";
// let result = "";

// const btns = document.querySelectorAll(".buttons");

// const display = document.querySelector(".display");
// // const row = document.querySelector(".row");

// console.log("btn", btns);

// btns.forEach((item) => {
//   item.addEventListener("click", () => {
//     const value = item.innerHTML;
//     display.value += value;
//   });
// });
// const appendNumber = (number) => {
//   numbers += number;
//   document.getElementsByClassName(".row").value = numbers;
// };
let string = "";
let button = document.querySelectorAll(".buttons");
Array.from(button).forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".display").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector(".display").value = string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      document.querySelector(".display").value = string;
    }
  });
});
