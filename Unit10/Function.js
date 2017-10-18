// is even?
// function isEven(num) {
// 	if(num%2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
function isEven(num) {
	return num%2 === 0;
}

function factorial(num) {
	if(num === 0) {
		return 1;
	} else {
		return num*factorial(num-1);
	}
}

function kebabToSnake() {
	var myString = "THis,is,a,test";
	str = myString.replace(/,/g, "-");
	return str;
}