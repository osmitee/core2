let circleThree = document.getElementById("circle-three");
let circleFour = document.getElementById("circle-four");
let circleFive = document.getElementById("circle-five");
let circleSix = document.getElementById("circle-six");
let btn = document.getElementById("btn")
var slider = document.querySelector("input[type='range']");

slider.oninput = function () {
    let value = event.target.value; // gets the value from oninput event
    circleThree.style.opacity = parseInt(value) / 50; // returns continuous value between 0 and 1
    circleFour.style.opacity = parseInt(value) / 50;
    circleFive.style.opacity = parseInt(value-50) / 50;
    circleSix.style.opacity = parseInt(value - 50) / 50;
    btn.style.opacity = parseInt(value  - 90) / 10;
}