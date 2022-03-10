const cards = document.querySelectorAll('.factories-list__item');
const userBookmark = document.querySelector('#user-bookmark');
const bookmarkValue = userBookmark.querySelectorAll('span')[1];

if (bookmarkValue.textContent === '0') {
	bookmarkValue.style.display = 'none';
} else {
	bookmarkValue.style.display = 'block';
}

export const toggleBookmarks = () => {
	if (cards) {
		cards.forEach((card) => {
			const button = card.querySelector('.factories-list__button');

			button.addEventListener('mousedown', (evt) => evt.preventDefault());

			document.addEventListener('click', (evt) => {
				if (evt.target === button) {
					if (button.classList.contains('factories-list__button--active')) {
						button.classList.remove('factories-list__button--active');
						bookmarkValue.textContent = Number(bookmarkValue.textContent) - 1;
					} else {
						button.classList.add('factories-list__button--active');
						bookmarkValue.textContent = Number(bookmarkValue.textContent) + 1;
					}

					if (bookmarkValue.textContent === '0') {
						bookmarkValue.style.display = 'none';
					} else {
						bookmarkValue.style.display = 'block';
					}
				}
			});
		});
	}
};
