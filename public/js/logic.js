$('#sendMsgBtn').click(exampleAlert); // Collect HTML element with (#) id sendMsgBtn, when click do function exampleAlert

function exampleAlert() {
	alert("Author: " + $('#author').val() + "\nMessage: " + $('#message').val());
	console.log("Button pressed!");
}