var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.querySelector("button");


function inputLength() {
	return input.value;
}

function createListElement() {
	var li = document.createElement("li");
	var inputText = document.createTextNode(input.value);
	var deleteButton = document.createElement("button");
	var deleteText = document.createTextNode
	("Delete");
	li.appendChild(inputText);
	li.appendChild(deleteButton);
	deleteButton.appendChild(deleteText);
	ul.appendChild(li);
	input.value = "";
}

function addCheckMark(e) {
	e.target.classList.toggle("done");
}

function addListAfterClick() {
	if (inputLength().length > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength().length > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteItem(e) {
	var item = e.target;
	item.parentNode.removeChild(item);
	
}


deleteButton.addEventListener("click", deleteItem);

ul.addEventListener("click", addCheckMark);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

