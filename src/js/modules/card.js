const cardsSimple = document.querySelectorAll('.card--simple');
const userCart = document.querySelector('#user-cart');
const parent = userCart.querySelectorAll('span')[1];
const value = userCart.querySelectorAll('span')[1].querySelector('span');

document.addEventListener('mousedown', (evt) => {
	if (evt.target.classList.contains('active-card__button')) {
		evt.preventDefault();
	}
});

export const addToCart = () => {
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
