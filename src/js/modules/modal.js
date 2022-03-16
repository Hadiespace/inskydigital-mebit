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
const designModal = document.querySelector('.design-modal');
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

const createDesignModal = (evt) => {
	if (evt.target.closest('.collaboration__request')) {
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

function onDesignModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		designModal.classList.remove('design-modal--open');
		document.removeEventListener('keydown', onDesignModuleKeyDown);
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

			document.removeEventListener('keydown', onCartModuleKeyDown);
		}

		createCartModal(evt);
		createRequestModal(evt);
		createDesignModal(evt);
		createSuccessModal(evt);
	});
};
