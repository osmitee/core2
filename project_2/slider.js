var circleOne = document.getElementById("circle-one")
var slider = document.getElementById("slider")

function slider_value(value) {
    if (parseInt(value) < 50)
    circleOne.style.opacity = "100%";
}