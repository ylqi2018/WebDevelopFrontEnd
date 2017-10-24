// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 255, 255)",
// ];
// var game = {}

// game.init = function() {
// 	// mode buttons add listeners
// 	setupModeButtons();
// 	setupSquares();
// 	reset();
// }

// game.init();

var numberOfSquares = 6;
var colors = [];
// pick a random color
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	// mode buttons add listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for(var i=0; i<modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
			reset();
		});
	}	
}

function setupSquares() {
	for(var i=0; i<squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function() {
			// grab color of clicked square
			var clickedColor = this.style.background;
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
}

for(var i=0; i<modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
		// if(this.textContent === "Easy") {
		// 	numberOfSquares = 3;
		// } else {
		// 	numberOfSquares = 6;
		// }
		reset();
		// figure out how many squares to show
		// pick new colors
		// pick a new pickedcolor
		// update page to reflect changes
	});
}

function reset() {
	// generate all new colors
	colors = generateRandomColors(numberOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	// change colors of squares
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
	h1.style.background = "steelblue";
}

// init();

// easyBtn.addEventListener("click", function() {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function() {
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	// generate all new colors
	// colors = generateRandomColors(numberOfSquares);
	// // pick a new random color from array
	// pickedColor = pickColor();
	// messageDisplay.textContent = "";
	// // change colorDisplay to match picked Color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors";
	// // change colors of squares
	// for(var i=0; i<squares.length; i++) {
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
	reset();
});


colorDisplay.textContent = pickedColor;




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