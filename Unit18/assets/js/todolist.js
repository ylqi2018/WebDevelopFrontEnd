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

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click X to delete todo
$("ul").on("click", "span", function(event) {
	//alert("Clicked on a span");
	$(this).parent().fadeOut(500, function() {	// this ref to span
		$(this).remove();	// this ref to li
	});
	event.stopPropagation();
});

// $("li").click(function() {
// 	alert("Clicked on a li");
// });

// $("ul").click(function() {
// 	alert("Clicked on a ul");
// });

// $("#container").click(function() {
// 	alert("Clicked on container");
// });

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// extract text out
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});