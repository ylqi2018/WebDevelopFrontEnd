console.log("connect");

var firstLi = document.querySelector("li");
var lis = document.querySelectorAll("li");
// console.log("firstLi");
// firstLi.addEventListener("mouseover", function() {
// 	firstLi.style.color = "green";
// });

// firstLi.addEventListener("mouseout", function() {
// 	firstLi.style.color = "black";
// });

for(var i=0; i<lis.length; i++) {
	lis[i].addEventListener("mouseover", function() {
		this.classList.add("selected");
	});
	lis[i].addEventListener("mouseout", function() {
		this.classList.remove("selected");
	});
	lis[i].addEventListener("click", function() {
		this.classList.toggle("done");
	});
}