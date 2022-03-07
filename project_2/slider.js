let circleOne = document.getElementById("circle-one");
let slider = document.querySelector("input[type='range']");
    
function slider_value(value) {
    slider.oninput = function () {
    output.innerHTML = slider_value;
    this.slider_value(value);
}
  if (parseInt(value) <= 50) {
    circleOne.style.opacity = "100%";
  }
  else {
    circleOne.style.opacity = "0%";
  }
}





