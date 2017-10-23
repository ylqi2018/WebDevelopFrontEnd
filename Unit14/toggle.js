// alert("Connected!");// 

var button = document.querySelector("button");

// console.log(button);
// var isPurple = false;

// button.addEventListener("click", function(){
// 	// alert("clicked!");
// 	// If white
// 		// make purple
// 	// If purple
// 		// make white

// 	if(isPurple) {
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
	
// });

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});