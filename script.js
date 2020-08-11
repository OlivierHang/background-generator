var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var Randombtn = document.getElementById("random");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + " ;";
}

// function to get a random number
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// both function to convert RGB color to Hexadecimal color
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function getRgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function setColorValue() {
  var redC1 = getRandomIntInclusive(0, 255);
  var greenC1 = getRandomIntInclusive(0, 255);
  var blueC1 = getRandomIntInclusive(0, 255);

  var redC2 = getRandomIntInclusive(0, 255);
  var greenC2 = getRandomIntInclusive(0, 255);
  var blueC2 = getRandomIntInclusive(0, 255);

  var rgbC1 = "rgb(" + redC1 + ", " + greenC1 + ", " + blueC1 + ")";
  var rgbC2 = "rgb(" + redC2 + ", " + greenC2 + ", " + blueC2 + ")";

  //setting color value on linear style gradient in style.css
  body.style.background =
    "linear-gradient(to right, " + rgbC1 + ", " + rgbC2 + ")";
  css.textContent = body.style.background + " ;";

  // setting color value on both input color tag
  // color.value only accept Hexadecimal color
  color1.value = getRgbToHex(redC1, greenC1, blueC1);
  color2.value = getRgbToHex(redC2, greenC2, blueC2);
}

// when the page load, call the function to set all color value
// (to input tag & background style)
setColorValue();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
Randombtn.addEventListener("click", setColorValue);
