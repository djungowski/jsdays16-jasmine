var buttonClickHandler = function() {
	$('#hello').text('Kitty');
};

var registerFormHandler = function () {
	$('#hello-kitty-form').submit(function(event) {
		event.preventDefault();
		buttonClickHandler();
	});
};