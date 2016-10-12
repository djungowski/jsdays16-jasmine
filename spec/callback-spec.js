describe('Callback tests', function() {
    it('calls the callback using done', function(done) {
		var callback = function () {
			done();
		};

		triggersCallback(callback);
    });

	describe('using spies', function() {
		it('calls the callback using spies', function() {
			var callback = jasmine.createSpy('callback');
			triggersCallback(callback);
			expect(callback).toHaveBeenCalled();
		});

		it('calls the callback with parameter', function() {
			var callback = jasmine.createSpy('callback');
			var someParameter = 'Sebastian steht im Code';
			triggersCallback(callback, someParameter);
			expect(callback).toHaveBeenCalledWith(someParameter, true);
		});

		it('calls the callback twice', function() {
			var callback = jasmine.createSpy('callback');
			triggersCallback(callback);
			expect(callback).toHaveBeenCalledTimes(2);
		});
	});
});