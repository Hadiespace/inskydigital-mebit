const bookmarksTopLink = document.querySelector('.bookmarks__top-button');
const sectionTopLink = document.querySelector('.section__top-button');
const popupChoices = document.querySelectorAll('.choice-popup');

const createBookmarksFilters = () => {
	if (bookmarksTopLink) {
		const bookmarksMiddleWrapper = document.querySelector('.bookmarks__middle-wrapper');
		const bookmarksMiddleContainer = document.querySelector('.bookmarks__middle-container');

		bookmarksTopLink.addEventListener('click', () => {
			if (bookmarksTopLink.getAttribute('aria-expanded') === 'false') {
				bookmarksTopLink.setAttribute('aria-expanded', 'true');
				bookmarksTopLink.querySelector('span').textContent = 'Скрыть фильтры';
			} else {
				bookmarksTopLink.setAttribute('aria-expanded', 'false');
				bookmarksTopLink.querySelector('span').textContent = 'Показать фильтры';

				if (popupChoices) {
					popupChoices.forEach((elem) => elem.classList.remove('choice-popup--active'));
				}
			}

			bookmarksMiddleWrapper.classList.toggle('bookmarks__middle-wrapper--open');
			bookmarksMiddleContainer.classList.toggle('bookmarks__middle-container--open');
		});
	}
};

const createSectionFilters = () => {
	if (sectionTopLink) {
		const sectionWrapper = document.querySelector('.section__top-filters');

		sectionTopLink.addEventListener('click', () => {
			if (sectionTopLink.getAttribute('aria-expanded') === 'false') {
				sectionTopLink.setAttribute('aria-expanded', 'true');
				sectionTopLink.querySelector('span').textContent = 'Скрыть фильтры';
			} else {
				sectionTopLink.setAttribute('aria-expanded', 'false');
				sectionTopLink.querySelector('span').textContent = 'Показать фильтры';

				if (popupChoices) {
					popupChoices.forEach((elem) => elem.classList.remove('choice-popup--active'));
				}
			}

			sectionWrapper.classList.toggle('section__top-filters--open');
		});
	}
};

export const toggleFilters = () => {
	createBookmarksFilters();
	createSectionFilters();
};
