var buttonClickHandler = function() {
	$('#hello').text('Kitty');
};

var registerFormHandler = function () {
	$('#hello-kitty-form').submit(function(event) {
		event.preventDefault();
		buttonClickHandler();
	});
};

var usertextFormHandler = function (event) {
	event.preventDefault();
	var usertext = $('#usertext').val();
	$('#textresult').text(usertext);
};

var registerUsertextFormHandler = function() {
	$('#usertext-form').submit(usertextFormHandler);
}