describe('jQuery tests', function() {
    it('renders a text when executing function', function() {
		jasmine.getFixtures().set('<p id="hello"></p>');
		buttonClickHandler();
		expect($('#hello')).toHaveText('Kitty');
    });

	it('renders a text when submitting form', function() {
		jasmine.getFixtures().load('form.html');

		registerFormHandler();
	    $('#hello-kitty-form').submit();

		expect($('#hello')).toHaveText('Kitty');
	});

	it('renders a user text when submitting form', function() {
	    jasmine.getFixtures().load('aufgabe7.html');
		var usertext = 'Hello Kitty';

		registerUsertextFormHandler();
		$('#usertext').val(usertext);
		$('#usertext-form').submit();

		expect($('#textresult')).toHaveText(usertext);
	});
});