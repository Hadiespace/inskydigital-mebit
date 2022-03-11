const productFavorite = document.querySelector('.product__favorite');
const userFavorite = document.querySelector('#user-favorite');
const favoriteValue = userFavorite.querySelectorAll('span')[1];

export const toggleProduct = () => {
	if (productFavorite) {
		productFavorite.addEventListener('click', () => {
			if (productFavorite.classList.contains('product__favorite--active')) {
				productFavorite.classList.remove('product__favorite--active');
				favoriteValue.textContent = Number(favoriteValue.textContent) - 1;
			} else {
				productFavorite.classList.add('product__favorite--active');
				favoriteValue.textContent = Number(favoriteValue.textContent) + 1;
			}

			if (favoriteValue.textContent === '0') {
				favoriteValue.style.display = 'none';
			} else {
				favoriteValue.style.display = 'block';
			}
		});
	}
};
