// alert("Hello");

// Create secretNumber
var secretNumber = 5;

// Ask user for guess
// var guess = prompt("Guess a number");
var guess = Number(prompt("Guess a number"));
// alert(guess);

// Check if guess is right or not
// if(guess === secretNumber) {
// 	alert("You get a right");
// }
if(guess === secretNumber) {
	alert("You get a right");
}
// // Otherwise, you got it wrong
// else {
// 	alert("wrong");
// }
else if(guess > secretNumber) {
	alert("Too high");
} else {
	alert("Too small")
}