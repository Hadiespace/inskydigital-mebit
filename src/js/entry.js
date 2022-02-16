import 'focus-visible/dist/focus-visible.min.js';
import 'wicg-inert';
import { testSupportWebp } from './modules/webp.js';
import { changeMenuHeight } from './modules/vh.js';
import { resizeCatalogList } from './modules/product-navigation.js';
import { generateSwiper } from './modules/swiper.js';
import { scrollHeader } from './modules/header.js';
import { initScroll } from './modules/scroll.js';
import { clickCatalogHomeTag } from './modules/home-catalog.js';
import { findVideos } from './modules/video.js';
import { createMap } from './modules/map.js';

testSupportWebp();
changeMenuHeight();
scrollHeader();
initScroll();
resizeCatalogList();
generateSwiper();
clickCatalogHomeTag();
findVideos();
createMap();

const kek = (evt) => {
	const navigationWrapper = document.querySelector('.product-navigation__catalog-wrapper');
	const value = navigationWrapper.clientWidth;
	if (evt.target.classList.contains('panel-item__link') ||
		evt.target.classList.contains('panel-item__button')) {
		const lists = evt.target.parentElement.querySelectorAll('.navigation-catalog');
		if (lists) {
			lists.forEach((list) => {
				list.style.zIndex = '2';
				list.style.setProperty('--padding', `${value + 1}px`);
			});
		}
	}

	if (evt.target.classList.contains('panel-item')) {
		const lists = evt.target.querySelectorAll('.navigation-catalog');
		if (lists) {
			lists.forEach((list) => {
				list.style.zIndex = '2';
				list.style.setProperty('--padding', `${value + 1}px`);
			});
		}
	}
};

document.addEventListener('touchstart', (evt) => {
	setTimeout(() => {
		kek(evt);
	}, 300);
});

document.addEventListener('mousemove', (evt) => {
	setTimeout(() => {
		kek(evt);
	}, 300);
});

document.addEventListener('click', (evt) => {
	if (evt.target.classList.contains('.panel-item__link span')) {
		evt.preventDefault();
	}
});

// Форма

const productNavigation = document.querySelector('.product-navigation');
const navigationSubmit = document.querySelector('.product-navigation__submit');
const navigationInput = document.querySelector('.product-navigation__input');

navigationSubmit.addEventListener('click', (evt) => {
	if (navigationInput.value.trim() === '') {
		evt.preventDefault();
		navigationInput.focus();
	}
});

navigationInput.addEventListener('input', (evt) => {
	if (evt.target.value.trim() !== '') {
		productNavigation.classList.add('product-navigation--visible');
	} else {
		productNavigation.classList.remove('product-navigation--visible');
	}
});
