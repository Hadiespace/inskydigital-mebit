import {
	isEscEvent,
	enablePageInert,
	disablePageInert,
	hideScroll,
	showScroll,
} from './util.js';

const modal = document.querySelector('.modal');
const cartModal = document.querySelector('.cart-modal');
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

const createCartModalModal = (evt) => {
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

function onCartModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		cartModal.classList.remove('cart-modal--open');
	}
}

export const createModal = () => {
	document.addEventListener('click', (evt) => {
		// Закрыть все модалки
		if (evt.target.classList.contains('modal--open')) {
			closeAllProps();

			cartModal.classList.remove('cart-modal--open');

			document.removeEventListener('keydown', onCartModuleKeyDown);
		}

		createCartModalModal(evt);
	});
};
