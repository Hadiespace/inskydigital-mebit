const cards = document.querySelectorAll('.card');
const userFavorite = document.querySelector('#user-favorite');
const favoriteValue = userFavorite.querySelectorAll('span')[1];

if (favoriteValue.textContent === '0') {
	favoriteValue.style.display = 'none';
} else {
	favoriteValue.style.display = 'block';
}

export const toggleFavorites = () => {
	if (cards) {
		cards.forEach((card) => {
			const stock = card.querySelector('.stock-card__favorite');
			const active = card.querySelector('.card__favorite');

			if (stock) {
				stock.addEventListener('mousedown', (evt) => evt.preventDefault());
				active.addEventListener('mousedown', (evt) => evt.preventDefault());

				document.addEventListener('click', (evt) => {
					if (evt.target === stock || evt.target === active) {
						if (active.classList.contains('card__favorite--active')) {
							active.classList.remove('card__favorite--active');
							stock.classList.remove('stock-card__favorite--active');
							favoriteValue.textContent = Number(favoriteValue.textContent) - 1;
						} else {
							active.classList.add('card__favorite--active');
							stock.classList.add('stock-card__favorite--active');
							favoriteValue.textContent = Number(favoriteValue.textContent) + 1;
						}

						if (favoriteValue.textContent === '0') {
							favoriteValue.style.display = 'none';
						} else {
							favoriteValue.style.display = 'block';
						}
					}
				});
			}
		});
	}
};
