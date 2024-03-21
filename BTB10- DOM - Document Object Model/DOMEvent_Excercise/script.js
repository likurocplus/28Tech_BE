
var userInput = document.querySelector("#userinput");
var enter = document.getElementById("enter");
var itemList = document.getElementById("item--List")
var deleteButtom = document.querySelectorAll(".delete--button")

function inputLength() {
	return userInput.value.length;
}

function createElementList() {
	var li,inputData,bt;
	li = document.createElement("li");
	inputData = document.createTextNode(userInput.value);
	bt=document.createElement("button");
	
	li.appendChild(inputData);
	bt.appendChild(document.createTextNode("Delete"))
	li.appendChild(bt);
	itemList.appendChild(li);

	userInput.value = "";
	bt.addEventListener("click",deleteListItem)
}

function addListAfterClick() {
	if(inputLength() > 0){
		createElementList();
	}
}

function addListAfterKeypress(event) {
	//keyCode === 13 : ENTER
	if(inputLength() > 0 && event.keyCode === 13 ){
		createElementList();
	}
}

function deleteListItem(event) {
	var item = event.target.parentNode;
	item.parentNode.removeChild(item);
}

enter.addEventListener("click",addListAfterClick);

userInput.addEventListener("keypress",addListAfterKeypress);

for (const buttonDelete of deleteButtom) {
	buttonDelete.addEventListener("click",deleteListItem);
}

// var enterButt = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var listButton = document.querySelectorAll('.delete--button');


// function inputLength() {
// 	return input.value.length;
// }

// function createListElement(el) {
// 	var li, inputText, btn;
// 	li = document.createElement("li");
// 	inputText = document.createTextNode(input.value);
// 	btn = document.createElement("button");

// 	btn.appendChild(document.createTextNode("Delete"));
// 	li.appendChild(inputText);
// 	li.appendChild(btn);
// 	ul.appendChild(li);
	
// 	input.value = "";
// 	btn.onclick = deleteListItem;
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// function doneItem(e) {
// 	if (e.target.tagName === "LI") {
// 		e.target.classList.toggle("done");
// 	}
// }

// function deleteListItem(event) {
// 	var listElement = event.target.parentNode;
// 	event.target.parentNode.parentNode.removeChild(listElement);
// }


// enterButt.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

// ul.addEventListener("click", doneItem);

// Array.from(listButton).forEach(link => {
//     link.addEventListener('click', deleteListItem);
// });




// var userInput = document.querySelector("#userinput");
// var enter = document.getElementById("enter");
// var itemList = document.getElementById("item--List");
// var deleteButtons = document.querySelectorAll(".delete--button");

// function inputLength() {
// 	return userInput.value.length;
// }

// function createElementList() {
// 	var li = document.createElement("li");
// 	var inputData = document.createTextNode(userInput.value);
// 	var deleteButton = document.createElement("button");
	
// 	li.appendChild(inputData);
// 	deleteButton.appendChild(document.createTextNode("Delete"));
// 	li.appendChild(deleteButton);
// 	itemList.appendChild(li);

// 	userInput.value = "";
// 	deleteButton.addEventListener("click", deleteListItem);
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createElementList();
// 	}
// }

// function addListAfterKeypress(event) {
// 	//keyCode === 13 : ENTER
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createElementList();
// 	}
// }

// function deleteListItem(event) {
// 	var item = event.target.parentNode;
// 	item.parentNode.removeChild(item);
// }

// enter.addEventListener("click", addListAfterClick);

// userInput.addEventListener("keypress", addListAfterKeypress);

// for (const deleteButton of deleteButtons) {
// 	deleteButton.addEventListener("click", deleteListItem);
// }


