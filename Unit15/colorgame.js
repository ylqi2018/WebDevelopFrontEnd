// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 255, 255)",
// ];
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
// pick a random color
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numberOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i=0; i<squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});


colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++) {
	// add initial colors to squares
	squares[i].style.background = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function() {
		// grab color of clicked square
		var clickedColor = this.style.background;
		console.log(pickedColor, clickedColor);
		// compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again."
		}
	});
}


function changeColors(color) {
	// loop through all squares
	for(var i=0; i<colors.length; i++) {
		// change each color to match given color
		squares[i].style.background = color;
	}
	

}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// and num random colors to array
	for(var i=0; i<num; i++) {
		// get random color and put into arr
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor() {
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a "red" from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "red" from 0-255
	var b = Math.floor(Math.random() * 256);
	// return rgb(r, g, b);
	return "rgb(" + r +", " + g + ", " + b + ")";
}