describe('Spies tests', function() {
	describe('generatesRandomNumber()', function() {
		it('returns a number', function() {
			expect(generatesRandomNumber()).toEqual(jasmine.any(Number));
		});

		it('returns 1337 when using spies', function() {
			var expectedRandomNumber = 1337;
			spyOn(Math, 'random').and.returnValue(expectedRandomNumber);

			var randomNumber = generatesRandomNumber();

			expect(randomNumber).toEqual(expectedRandomNumber);
			expect(Math.random).toHaveBeenCalled();
		});
	});

	describe('gotoSomeLocation()', function() {
		it('sets the window location', function() {
			var mockedWindow = {
				location: {
					href: ''
				}
			};

			var someUrl = 'http://www.google.de';
			gotoSomeLocation(mockedWindow, someUrl);
			expect(mockedWindow.location.href).toEqual(someUrl);
		});
	});
});