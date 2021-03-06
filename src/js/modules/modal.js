import Swiper, { Navigation, Pagination } from 'swiper';

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
const settFormModal = document.querySelector('.sett-form-modal');
const pageNavigation = document.querySelector('.page-navigation');
const catalogModal = document.querySelector('.catalog-modal');

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
let swiperSett = null;

if (settModal) {
	const swiper = settModal.querySelector('.swiper');
	const next = settModal.querySelector('.sett-modal__button--next');
	const prev = settModal.querySelector('.sett-modal__button--prev');
	const dots = settModal.querySelector('.sett-modal__dots');

	swiperSett = new Swiper(swiper, {
		modules: [Navigation, Pagination],
		loop: true,
		slidesPerView: 1,
		speed: 300,
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
		pagination: {
			el: dots,
			type: 'bullets',
			clickable: true,
		},
	});
}

const createSettModal = (evt) => {
	if (evt.target.closest('.active-card__preview-open')
		&& evt.target.offsetParent.offsetParent.offsetParent.classList.contains('card--set')) {
		openAllProps();

		if (swiperSett) {
			swiperSett.update();
		}
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

let swiperSimple = null;

if (simpleModal) {
	const swiper = simpleModal.querySelector('.swiper');
	const next = simpleModal.querySelector('.simple-modal__button--next');
	const prev = simpleModal.querySelector('.simple-modal__button--prev');
	const dots = simpleModal.querySelector('.simple-modal__dots');

	swiperSimple = new Swiper(swiper, {
		modules: [Navigation, Pagination],
		loop: true,
		slidesPerView: 1,
		speed: 300,
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
		pagination: {
			el: dots,
			type: 'bullets',
			clickable: true,
		},
	});
}

const createSimpleModal = (evt) => {
	if (evt.target.closest('.active-card__preview-open')
		&& evt.target.offsetParent.offsetParent.offsetParent.classList.contains('card--simple')) {
		openAllProps();

		swiperSimple.update();
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
			simpleModal.querySelector('.simple-modal__add-to-cart').textContent = '???????????? ???? ?????????????? ???';
		} else {
			simpleModal.querySelector('.simple-modal__add-to-cart').classList.remove('simple-modal__add-to-cart--active');
			simpleModal.querySelector('.simple-modal__add-to-cart').textContent = '???????????????? ?? ?????????????? ???';
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
			evt.target.textContent = '???????????? ???? ?????????????? ???';
		} else {
			evt.target.classList.remove('simple-modal__add-to-cart--active');
			evt.target.textContent = '???????????????? ?? ?????????????? ???';
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

const createSettFormModal = (evt) => {
	if (evt.target.closest('.product__get-offer')) {
		evt.preventDefault();
		openAllProps();

		const favorite = document.querySelector('.product__favorite');
		const formFavorite = settFormModal.querySelector('.sett-form-modal__favorite');

		if (favorite.classList.contains('product__favorite--active')) {
			formFavorite.classList.add('sett-form-modal__favorite--active');
		} else {
			formFavorite.classList.remove('sett-form-modal__favorite--active');
		}

		settFormModal.classList.add('sett-form-modal--open');
		document.addEventListener('keydown', onSettFormModuleKeyDown);
	}

	if (evt.target.closest('.sett-form-modal__close')) {
		evt.preventDefault();
		closeAllProps();

		settFormModal.classList.remove('sett-form-modal--open');
		document.removeEventListener('keydown', onSettFormModuleKeyDown);
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

let swiperCatalog = null;

if (catalogModal) {
	const swiper = catalogModal.querySelector('.swiper');
	const next = catalogModal.querySelector('.catalog-modal__button--next');
	const prev = catalogModal.querySelector('.catalog-modal__button--prev');
	const dots = catalogModal.querySelector('.catalog-modal__pages');
	const dotStart = Number(dots.dataset.page);

	swiperCatalog = new Swiper(swiper, {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		speed: 300,
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
		pagination: {
			el: dots,
			clickable: true,
			renderBullet: function (index, className) {
				return (
					`<p class="${className}">??????. ${dotStart + index}-${dotStart + index + 1}</p>`
				);
			},
		},
	});
}

const createCatalogModal = (evt) => {
	if (evt.target.closest('.factories-list__item')
		&& !evt.target.classList.contains('factories-list__button')) {
		evt.preventDefault();
		openAllProps();

		swiperCatalog.update();
		catalogModal.classList.add('catalog-modal--open');
		document.addEventListener('keydown', onCatalogModuleKeyDown);
	}

	if (evt.target.closest('.catalog-modal__close')) {
		evt.preventDefault();
		closeAllProps();

		catalogModal.classList.remove('catalog-modal--open');
		document.removeEventListener('keydown', onCatalogModuleKeyDown);
	}
};

function onCatalogModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		catalogModal.classList.remove('catalog-modal--open');
		document.removeEventListener('keydown', onCatalogModuleKeyDown);
	}
}

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

function onSettFormModuleKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeAllProps();
		settFormModal.classList.remove('sett-form-modal--open');
		document.removeEventListener('keydown', onSettFormModuleKeyDown);
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

	if (designModal) {
		designModal.classList.remove('design-modal--open');
		document.removeEventListener('keydown', onDesignModuleKeyDown);
	}

	if (requestModal) {
		requestModal.classList.remove('request-modal--open');
		document.removeEventListener('keydown', onRequestModuleKeyDown);
	}

	if (settFormModal) {
		settFormModal.classList.remove('sett-form-modal--open');
		document.removeEventListener('keydown', onSettFormModuleKeyDown);
	}

	setTimeout(() => {
		successModal.classList.add('success-modal--open');
		document.addEventListener('keydown', onSuccessModuleKeyDown);
	}, 300);
};

export const createModal = () => {
	document.addEventListener('click', (evt) => {
		// ?????????????? ?????? ??????????????
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
		createSettFormModal(evt);
		createCatalogModal(evt);

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

		if (evt.target.classList.contains('catalog-modal__get')) {
			catalogModal.classList.remove('catalog-modal--open');
			document.removeEventListener('keydown', onCatalogModuleKeyDown);

			setTimeout(() => {
				requestModal.classList.add('request-modal--open');
				document.addEventListener('keydown', onRequestModuleKeyDown);
			}, 300);
		}
	});

	if (settFormModal) {
		const favorite = document.querySelector('.product__favorite');
		const formFavorite = settFormModal.querySelector('.sett-form-modal__favorite');

		formFavorite.addEventListener('click', () => {
			if (formFavorite.classList.contains('sett-form-modal__favorite--active')) {
				formFavorite.classList.remove('sett-form-modal__favorite--active');
				favorite.click();
			} else {
				formFavorite.classList.add('sett-form-modal__favorite--active');
				favorite.click();
			}
		});
	}
};
