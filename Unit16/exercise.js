if(jQuery) {
	alert("!");
} else {
	alert("No !");
}

$("div").css("background", "purple");

$("div.highlight").css("width", "200px");

$("#third").css("border", "2px solid orange");

// $("div:first").css("color", "pink");	// slower
$("div:first-of-type").css("color", "pink");