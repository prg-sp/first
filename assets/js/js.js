// let burgeris = document.querySelector('#burg-jung');
// let menu = document.querySelector('#menu');

// let burger = document.getElementsByClassName('burger__img')[0];
// let iksas = document.getElementsByClassName('burger__cross')[0];

// burgeris.addEventListener('click', function () {
// 	menu.classList.toggle('nav-box--show');
// 	console.log('burger veikia');

// 	if (menu.classList.contains('nav-box--show')) {
// 		iksas.style.display = 'block';
// 		burger.style.display = 'none';
// 		console.log('rodo iksa');
// 	} else {
// 		iksas.style.display = 'none';
// 		burger.style.display = 'block';
// 		console.log('rodo buderbroda');
// 	}
// });

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
