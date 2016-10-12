describe('Number tests', function() {
	it('returns any number', function() {
	    expect(returnsNumber(42)).toEqual(jasmine.any(Number));
	});

	it('shows me that 2 is a number', function() {
		expect(returnsNumber(2)).toEqual(2);
	});

	it('does not return 5', function() {
		expect(returnsNumber(5)).not.toEqual(2);
	});

	it('returns undefined', function() {
		expect(returnsNumber()).toBeUndefined();
	});
});

describe('Function tests', function() {
    it('returns a function', function() {
        expect(returnsFunction()).toEqual(jasmine.any(Function));
    });

	it('does not throw anything', function() {
	    expect(returnsFunction()).not.toThrow();
	});

	it('throws if proving 5 as param', function() {
		var throwsAnException = function () {
			returnsFunction(5)
		};
	    expect(throwsAnException).toThrow('Foobar');
	});
});
