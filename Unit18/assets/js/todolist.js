// check off specific todo by click
// $("li").click(function() {
// 	// $(this).css("color", "gray");
// 	// $(this).css("text-decoration", "line-through");
	
// 	console.log($(this).css("color"));
// 	// if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)") {
// 		// turn it back
// 		// console.log("This is currently gray");
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
		
// 	} else {
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// })

$("li").click(function() {
	$(this).toggleClass("completed");
})