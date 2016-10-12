var usesTimeout = function (callback, text) {
	window.setTimeout(callback.bind(null, text), 5000);
};