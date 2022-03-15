import {
	enablePageInert,
	disablePageInert,
	hideScroll,
	showScroll,
} from './util.js';

const filterButton = document.querySelector('.filter-button');
const filterMobile = document.querySelector('.filter-mobile');
const filterClose = document.querySelector('.filter-mobile__close');
const filterGetAll = document.querySelector('.filter-mobile__get-all');

export const createFilterMobile = () => {
	if (filterButton) {
		filterButton.addEventListener('click', () => {
			filterMobile.classList.add('filter-mobile--active');
		});

		filterClose.addEventListener('click', () => {
			filterMobile.classList.remove('filter-mobile--active');
		});

		filterGetAll.addEventListener('click', () => {
			filterMobile.classList.remove('filter-mobile--active');
		});

		document.addEventListener('click', (evt) => {
			if (evt.target.closest('.filter-mobile__button')) {
				evt.target.classList.toggle('filter-mobile__button--active');
				evt.target.nextElementSibling.classList.toggle('filter-mobile__list--active');
				evt.target.nextElementSibling.nextElementSibling.classList.toggle('filter-mobile__more--active');

				if (evt.target.classList.contains('filter-mobile__button--active')) {
					enablePageInert();
					hideScroll();
				} else {
					setTimeout(() => {
						disablePageInert();
						showScroll();
					}, 100);
				}
			}
		});
	}
};
