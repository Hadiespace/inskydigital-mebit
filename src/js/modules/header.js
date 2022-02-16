import { isEscEvent } from './util.js';

const pageNavigation = document.querySelector('.page-navigation');
const menuOpen = pageNavigation.querySelector('.page-navigation__menu-open');
const listWrapper = pageNavigation.querySelector('.page-navigation__list-wrapper');
const mobileCatalog = document.querySelector('.mobile-catalog');
const buttonCatalog = document.querySelector('.mobile-navigation__link--catalog');

const scrollNavigation = () => {
	if (window.pageYOffset >= 40) {
		pageNavigation.classList.add('page-navigation--scroll');
	} else {
		pageNavigation.classList.remove('page-navigation--scroll');
	}
};

export const scrollHeader = () => {
	scrollNavigation();
	window.addEventListener('scroll', () => {
		scrollNavigation();
	});
};

const openMenu = () => {
	document.addEventListener('click', clickMenu);
	document.addEventListener('keydown', onDocumentKeyDown);
	menuOpen.setAttribute('aria-expanded', 'true');
	listWrapper.classList.add('page-navigation__list-wrapper--visible');
	pageNavigation.classList.add('page-navigation--active');
};

const closeMenu = () => {
	document.removeEventListener('click', clickMenu);
	document.removeEventListener('keydown', onDocumentKeyDown);
	menuOpen.setAttribute('aria-expanded', 'false');
	listWrapper.classList.remove('page-navigation__list-wrapper--visible');
	pageNavigation.classList.remove('page-navigation--active');
};

function clickMenu(evt) {
	if (!evt.target.closest('.page-navigation__menu-open')
		&& !evt.target.closest('.page-navigation__list-wrapper')) {
		closeMenu();
	}
}

function onDocumentKeyDown(evt) {
	if ((isEscEvent(evt))) {
		closeMenu();
	}
}

menuOpen.addEventListener('click', () => {
	if (!listWrapper.classList.contains('page-navigation__list-wrapper--visible')) {
		openMenu();
	} else {
		closeMenu();
	}
});

document.addEventListener('click', (evt) => {
	if (evt.target.classList.contains('mobile-catalog__button')) {
		if (evt.target.getAttribute('aria-expanded', 'false') === 'false') {
			evt.target.setAttribute('aria-expanded', 'true');
			evt.target
				.nextElementSibling
				.querySelector('.mobile-catalog__sub-list')
				.classList.add('mobile-catalog__sub-list--visible');
		} else {
			evt.target.setAttribute('aria-expanded', 'false');
			evt.target
				.nextElementSibling
				.querySelector('.mobile-catalog__sub-list')
				.classList.remove('mobile-catalog__sub-list--visible');
		}
	}
});

buttonCatalog.addEventListener('click', (evt) => {
	if (evt.target.getAttribute('aria-expanded', 'false') === 'false') {
		evt.target.setAttribute('aria-expanded', 'true');
		evt.target.classList.add('mobile-navigation__link--current');
		mobileCatalog.classList.add('mobile-catalog--visible');
	} else {
		evt.target.setAttribute('aria-expanded', 'false');
		evt.target.classList.remove('mobile-navigation__link--current');
		mobileCatalog.classList.remove('mobile-catalog--visible');
	}
});
