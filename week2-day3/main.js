function changeHeader(event){
	event.preventDefault();
	var firstNameElement = document.getElementById('first-name');

	var firstName = firstNameElement.value;

	var headerHtmlElement = 
document.getElementById('header');

	headerHtmlElement.innerHTML = firstName
}

document.getElementById('my-form')
	.addEventListener("submit", changHeader);