import {
	isEscEvent,
	enablePageInert,
	disablePageInert,
	hideScroll,
	showScroll,
} from './util.js';

const modal = document.querySelector('.modal');
const cartModal = document.querySelector('.cart-modal');
const requestModal = document.querySelector('.request-modal');
const settModal = document.querySelector('.sett-modal');
const simpleModal = document.querySelector('.simple-modal');
const designModal = document.querySelector('.design-modal');
const loopModal = document.querySelector('.loop-modal');
const successModal = document.querySelector('.success-modal');
const pageNavigation = document.querySelector('.page-navigation');

const openAllProps = () => {
	enablePageInert();
	hideScroll();
	modal.classList.add('modal--open');
	setTimeout(() => {
		pageNavigation.classList.add('page-navigation--scroll');
	}, 0);
};

const closeAllProps = () => {
	modal.classList.remove('modal--open');

	setTimeout(() => {
		disablePageInert();
		showScroll();
	}, 100);
};

const createCartModal = (evt) => {
	if (evt.target.closest('.item-cart__remove')) {
		evt.preventDefault();
		openAllProps();

		cartModal.classList.add('cart-modal--open');
		document.addEventListener('keydown', onCartModuleKeyDown);
	}

	if (evt.target.closest('.cart-modal__button') ||
		evt.target.closest('.cart-modal__close')) {
		evt.preventDefault();
		closeAllProps();

		cartModal.classList.remove('cart-modal--open');
		document.removeEventListener('keydown', onCartModuleKeyDown);
	}
};

const createRequestModal = (evt) => {
	if (evt.target.closest('.application-cart__link')
		|| evt.target.closest('.product__get-offer')
		|| (evt.target.closest('.active-card__button') &&
			evt.target.offsetParent.offsetParent.offsetParent.classList.contains('card--set'))) {
		evt.preventDefault();
		openAllProps();

		requestModal.classList.add('request-modal--open');
		document.addEventListener('keydown', onRequestModuleKeyDown);
	}

	if (evt.target.closest('.request-modal__close')) {
		evt.preventDefault();
		closeAllProps();

		requestModal.classList.remove('request-modal--open');
		document.removeEventListener('keydown', onRequestModuleKeyDown);
	}
};

let target = null;
let target2 = null;

const createSettModal = (evt) => {
	if (evt.target.closest('.active-card__preview-open')
		&& evt.target.offsetParent.offsetParent.offsetParent.classList.contains('card--set')) {
		openAllProps();

		settModal.classList.add('sett-modal--open');
		document.addEventListener('keydown', onSettModuleKeyDown);

		const favorite = evt.target.offsetParent.offsetParent.querySelector('.card__favorite');

		if (favorite.classList.contains('card__favorite--active')) {
			settModal.querySelector('.sett-modal__favorite').classList.add('sett-modal__favorite--active');
		} else {
			settModal.querySelector('.sett-modal__favorite').classList.remove('sett-modal__favorite--active');
		}

		target = favorite;
		evt.preventDefault();
	}

	if (evt.target.classList.contains('sett-modal__favorite')) {
		target.click();

		if (!evt.target.classList.contains('sett-modal__favorite--active')) {
			evt.target.classList.add('sett-modal__favorite--active');
		} else {
			evt.target.classList.remove('sett-modal__favorite--active');
		}
	}

	if (evt.target.closest('.sett-modal__close')) {
		evt.preventDefault();
		closeAllProps();

		settModal.classList.remove('sett-modal--open');
		document.removeEventListener('keydown', onSettModuleKeyDown);
	}
};

const createSimpleModal = (evt) => {
	if (evt.target.closest('.active-card__preview-open')
		&& evt.target.offsetParent.offsetParent.offsetParent.classList.contains('card--simple')) {
		openAllProps();

		simpleModal.classList.add('simple-modal--open');
		document.addEventListener('keydown', onSimpleModuleKeyDown);

		const favorite = evt.target.offsetParent.offsetParent.querySelector('.card__favorite');
		const cart = evt.target.offsetParent.offsetParent.querySelector('.active-card__button');

		if (favorite.classList.contains('card__favorite--active')) {
			simpleModal.querySelector('.simple-modal__favorite').classList.add('simple-modal__favorite--active');
		} else {
			simpleModal.querySelector('.simple-modal__favorite').classList.remove('simple-modal__favorite--active');
		}

		if (cart.classList.contains('active-card__button--add')) {
			simpleModal.querySelector('.simple-modal__add-to-cart').classList.add('simple-modal__add-to-cart--active');
			simpleModal.querySelector('.simple-modal__add-to-cart').textContent = 'Убрать из корзины —';
		} else {
			simpleModal.querySelector('.simple-modal__add-to-cart').classList.remove('simple-modal__add-to-cart--active');
			simpleModal.querySelector('.simple-modal__add-to-cart').textContent = 'Добавить в корзину —';
		}

		target = favorite;
		target2 = cart;
		evt.preventDefault();
	}

	if (evt.target.classList.contains('simple-modal__favorite')) {
		target.click();

		if (!evt.target.classList.contains('simple-modal__favorite--active')) {
			evt.target.classList.add('simple-modal__favorite--active');
		} else {
			evt.target.classList.remove('simple-modal__favorite--active');
		}
	}

	if (evt.target.classList.contains('simple-modal__add-to-cart')) {
		target2.click();

		if (!evt.target.classList.contains('simple-modal__add-to-cart--active')) {
			evt.target.classList.add('simple-modal__add-to-cart--active');
			evt.target.textContent = 'Убрать из корзины —';
		} else {
			evt.target.classList.remove('simple-modal__add-to-cart--active');
			evt.target.textContent = 'Добавить в корзину —';
		}
	}

	if (evt.target.closest('.simple-modal__close')) {
		evt.preventDefault();
		closeAllProps();

		simpleModal.classList.remove('simple-modal--open');
		document.removeEventListener('keydown', onSimpleModuleKeyDown);
	}
};

const createDesignModal = (evt) => {
	if (evt.target.closest('.collaboration__request')
		|| evt.target.closest('.panel-item--design')) {
		evt.preventDefault();
		openAllProps();

		designModal.classList.add('design-modal--open');
		document.addEventListener('keydown', onDesignModuleKeyDown);
	}

	if (evt.target.closest('.design-modal__close')) {
		evt.preventDefault();
		closeAllProps();

		designModal.classList.remove('design-modal--open');
		document.removeEventListener('keydown', onDesignModuleKeyDown);
	}
};

const createSuccessModal = (evt) => {
	if (evt.target.closest('.success-modal__close')) {
		evt.preventDefault();
		closeAllProps();

		successModal.classList.remove('success-modal--open');
		document.removeEventListener('keydown', onSuccessModuleKeyDown);
	}
};

const createLoopModal = (evt) => {
	if (evt.target.closest('.product__swiper-top-slide')
		|| evt.target.closest('.product__loop')) {
		evt.preventDefault();
		openAllProps();

		loopModal.classList.add('loop-modal--open');
		document.addEventListener('keydown', onLoopModuleKeyDown);
	}

	if (evt.target.closest('.loop-modal__close')) {
		evt.preventDefault();
		closeAllProps();

		loopModal.classList.remove('loop-modal--open');
		document.removeEventListener('keydown', onLoopModuleKeyDown);
	}
};

function onCartModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		cartModal.classList.remove('cart-modal--open');
		document.removeEventListener('keydown', onCartModuleKeyDown);
	}
}

function onRequestModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		requestModal.classList.remove('request-modal--open');
		document.removeEventListener('keydown', onRequestModuleKeyDown);
	}
}

function onSettModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		settModal.classList.remove('sett-modal--open');
		document.removeEventListener('keydown', onSettModuleKeyDown);
	}
}

function onSimpleModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		simpleModal.classList.remove('simple-modal--open');
		document.removeEventListener('keydown', onSimpleModuleKeyDown);
	}
}

function onDesignModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		designModal.classList.remove('design-modal--open');
		document.removeEventListener('keydown', onDesignModuleKeyDown);
	}
}

function onLoopModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		loopModal.classList.remove('loop-modal--open');
		document.removeEventListener('keydown', onLoopModuleKeyDown);
	}
}

function onSuccessModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		successModal.classList.remove('success-modal--open');
		document.removeEventListener('keydown', onSuccessModuleKeyDown);
	}
}

export const fromModalsToSuccess = () => {
	if (!modal.classList.contains('modal--open')) {
		openAllProps();
	}

	designModal.classList.remove('design-modal--open');
	document.removeEventListener('keydown', onDesignModuleKeyDown);

	requestModal.classList.remove('request-modal--open');
	document.removeEventListener('keydown', onRequestModuleKeyDown);

	setTimeout(() => {
		successModal.classList.add('success-modal--open');
		document.addEventListener('keydown', onSuccessModuleKeyDown);
	}, 300);
};

export const createModal = () => {
	document.addEventListener('click', (evt) => {
		// Закрыть все модалки
		if (evt.target.classList.contains('modal--open')) {
			closeAllProps();

			cartModal.classList.remove('cart-modal--open');
			settModal.classList.remove('sett-modal--open');

			document.removeEventListener('keydown', onCartModuleKeyDown);
			document.removeEventListener('keydown', onSettModuleKeyDown);
		}

		createCartModal(evt);
		createRequestModal(evt);
		createDesignModal(evt);
		createSuccessModal(evt);
		createSettModal(evt);
		createSimpleModal(evt);
		createLoopModal(evt);

		if (evt.target.classList.contains('sett-modal__get')) {
			settModal.classList.remove('sett-modal--open');
			document.removeEventListener('keydown', onSettModuleKeyDown);

			setTimeout(() => {
				requestModal.classList.add('request-modal--open');
				document.addEventListener('keydown', onRequestModuleKeyDown);
			}, 300);
		}

		if (evt.target.classList.contains('simple-modal__get')) {
			simpleModal.classList.remove('simple-modal--open');
			document.removeEventListener('keydown', onSimpleModuleKeyDown);

			setTimeout(() => {
				requestModal.classList.add('request-modal--open');
				document.addEventListener('keydown', onRequestModuleKeyDown);
			}, 300);
		}
	});
};
