describe('Calculator', function () {

	beforeEach(function() {
		this.calc = new Calculator();
		console.log('outer each');
	});

	it('should add 1 and 1 and return 2', function() {
		const result = this.calc.add(1, 1);
		expect(result).toBe(2);
	});

	it('should add 2 and 2 and return 4', function() {
		const result = this.calc.add(2, 2);
		expect(result).toBe(4);
	});

	describe('test case group', function() {
		beforeEach(function() {
		    console.log('inner each');
		});

	   it('runs a test case', function() {
	       console.log('inner');
		   expect(this.calc).toBeDefined();
	   });
	});

});