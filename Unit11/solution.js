console.log("Connected");

function printReverse(arr) {
	for(var i=arr.length-1; i>=0; i--) {
		console.log(arr[i]);
	}
}

printReverse([1, 2, 3, 4]);

// *** isUniform() ***
function isUniform(arr) {
	var first = arr[0];
	for(var i=1; i<arr.length; i++) {
		if(arr[i] !== first) {
			return false;
		}
	}
	return true;
}
// doesnot work
// function isUniform(arr) {
// 	var first = arr[0];
// 	arr.forEach(function(element) {
// 		if(element !== first) {
// 			return false;
// 		}
// 	});
// 	return true;
// }

console.log(isUniform([1, 1, 1]));
console.log(isUniform([1, 1, 2]));

// sumArray
function sunArray(arr) {
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

console.log(sunArray([1, 2, 3]));


function max(arr) {
	var max = arr[0];
	for (var i=1; i<arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
console.log(max([1, 2, 3, 20, 12]));

// function myForEach(arr, func) {
// 	//loop through array
// 	for(var i=0; i<arr.length; i++) {
// 		//call func for each item in array
// 		func();
// 	}
// }
// var colors = ["orange", "red", "yellow"];
// myForEach(colors, alert)

function myForEach(arr, func) {
	//loop through array
	for(var i=0; i<arr.length; i++) {
		//call func for each item in array
		func(arr[i]);
	}
}
var colors = ["orange", "red", "yellow"];
myForEach(colors, alert)

myForEach(colors, function(){alert("Hi Hi Hi")});