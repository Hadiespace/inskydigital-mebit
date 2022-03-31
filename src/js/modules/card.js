const cardsSimple = document.querySelectorAll('.card--simple');
const userCart = document.querySelector('#user-cart');
const parent = userCart.querySelectorAll('span')[1];
const value = userCart.querySelectorAll('span')[1].querySelector('span');
const productCart = document.querySelector('.product__add-to-cart');

document.addEventListener('mousedown', (evt) => {
	if (evt.target.classList.contains('active-card__button')
		|| evt.target === productCart) {
		evt.preventDefault();
	}
});

export const addToCart = () => {
	productCart.addEventListener('click', () => {
		if (productCart.classList.contains('product__add-to-cart--add')) {
			productCart.classList.remove('product__add-to-cart--add');
			productCart.textContent = 'Добавить в корзину —';
			value.textContent = Number(value.textContent) - 1;
		} else {
			productCart.classList.add('product__add-to-cart--add');
			productCart.textContent = 'Убрать из корзины —';
			value.textContent = Number(value.textContent) + 1;
		}

		if (value.textContent === '0') {
			parent.style.display = 'none';
		} else {
			parent.style.display = 'block';
		}
	});

	cardsSimple.forEach((card) => {
		card.addEventListener('click', (evt) => {
			if (evt.target.classList.contains('active-card__button')) {
				evt.preventDefault();
				const button = evt.target;

				if (button.classList.contains('active-card__button--add')) {
					button.classList.remove('active-card__button--add');
					button.textContent = 'Добавить в корзину —';
					value.textContent = Number(value.textContent) - 1;
				} else {
					button.classList.add('active-card__button--add');
					button.textContent = 'Убрать из корзины —';
					value.textContent = Number(value.textContent) + 1;
				}

				if (value.textContent === '0') {
					parent.style.display = 'none';
				} else {
					parent.style.display = 'block';
				}
			}
		});
	});
};
