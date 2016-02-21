var popup = document.querySelector(".btn-call-form");
var form = document.querySelector(".main-form")
var login = form.querySelector("[name=visit]");
	
popup.addEventListener("click", function(event){
	event.preventDefault();
	form.classList.toggle("main-form-toggle");
	login.focus();
});