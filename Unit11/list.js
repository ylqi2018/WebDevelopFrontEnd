var todos = ["But", "new"];

var input = prompt("What would you like to do?");

// Get this to repeat all the time

while(input !== "quit") {

	// Hand input
	if(input === "list") {
		console.log(todos);
	} else if(input === "new") {
		// ask for new todo
		var newTodo = prompt("Enter new todo");
		// add to todos array
		todos.push(newTodo);
	}
	
	// ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, you quit the lab");


