var triggersCallback = function (callback, callbackParameter) {
	callback(callbackParameter);
	callback(callbackParameter, true);
};