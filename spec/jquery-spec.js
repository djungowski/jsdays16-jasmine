describe('jQuery tests', function() {
    it('renders a text when executing function', function() {
		jasmine.getFixtures().set('<p id="hello"></p>');
		buttonClickHandler();
		expect($('#hello')).toHaveText('Kitty');
    });

	it('renders a text if submitting form', function() {
		jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
		jasmine.getFixtures().load('form.html');
		registerFormHandler();
	    $('#hello-kitty-form').submit();
		expect($('#hello')).toHaveText('Kitty');
	});
});