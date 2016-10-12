describe('Timer tests', function() {
	beforeEach(function() {
		jasmine.clock().install();
	});

	afterEach(function() {
		jasmine.clock().uninstall();
	});

    it('tests the timeout using jasmine clock', function() {
        var callback = jasmine.createSpy('callback');
		var text = 'Hello Kitty';

		usesTimeout(callback, text);
		expect(callback).not.toHaveBeenCalled();
		jasmine.clock().tick(5000);
		expect(callback).toHaveBeenCalledWith(text);
    });
});