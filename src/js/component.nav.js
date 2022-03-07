export default class barzd {
	constructor() {
		this.burgeris = document.querySelector('#burg-jung');
		this.menu = document.querySelector('#menu');
		this.burger = document.getElementsByClassName('burger__img')[0];
		this.iksas = document.getElementsByClassName('burger__cross')[0];
		this.teisybe = false;
	}

	togglStuff(klase) {
		this.menu.classList.toggle(klase);
		this.teisybe = !this.teisybe;
	}

	burg(tn) {
		this.burger.style.display = tn;
	}

	iks(tn) {
		this.iksas.style.display = tn;
	}

	onPaspaudus(stuff) {
		this.burgeris.addEventListener('click', stuff);
	}
}
