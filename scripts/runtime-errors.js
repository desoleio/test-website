window.uncaughtException.addEventListener('click', function() {
	throw new Error('uncaughtException');
});
window.uncaughtSyntaxError.addEventListener('click', function() {
	const i = 10;
	unknownFunction(i);
});

window.uncaughtStrictError.addEventListener('click', function() {
	'use strict';
	const i = 0;
	i = 5;
});
window.uncaughtString.addEventListener('click', function() {
	throw 'uncaughtString';
});
window.capturedException.addEventListener('click', function () {
	try {
		throw new Error('capturedException');
	} catch (e) {
		window.Desole.captureException(e)
	}
});
window.uncaughtPromise.addEventListener('click', function() {
	Promise.reject('uncaughtPromise');
});
window.capturedPromise.addEventListener('click', function () {
	Promise.resolve()
		.then(() => {
			throw new Error('capturedPromise');
		})
		.catch(window.Desole);
});

