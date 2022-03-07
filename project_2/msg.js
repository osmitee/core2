var circleOne = document.getElementById("circle-one")
var circleTwo = document.getElementById("circle-two")
var circleThree = document.getElementById("circle-three")
var circleFour = document.getElementById("circle-four")
var circleFive = document.getElementById("circle-five")

window.onscroll = function () {
    myFunction()
};


function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      circleOne.style.top = "400px";
      circleTwo.style.transform =  "rotate(-154deg)";
      circleTwo.style.height = "100px";
      circleThree.style.height = "154px";
      circleThree.style.top = "620px";
      circleThree.style.left = "-55px";
      circleFour.style.left = "270px";
      circleFour.style.top = "450px";
         circleFive.style.top = "100px";
  }
}

function popUp() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}