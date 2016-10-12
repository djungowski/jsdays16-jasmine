var returnsNumber = function (number) {
	return number;
};

var returnsFunction = function (anyNumber) {
	if(anyNumber == 5) {
		throw('Foobar');
	}

	return function () {
	};
};