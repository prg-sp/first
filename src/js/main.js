import barzd from './component.nav.js';

const barada = new barzd();
console.log(barada);

barada.onPaspaudus(() => {
	barada.togglStuff('nav-box--show');
	console.log(barada.teisybe);

	if (barada.teisybe) {
		barada.iks('block');
		barada.burg('none');
		console.log('x');
	} else {
		barada.burg('block');
		barada.iks('none');
		console.log('mcd');
	}
});
