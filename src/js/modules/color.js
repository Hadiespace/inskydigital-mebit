export const changeColor = () => {
	document.addEventListener('click', (evt) => {
		if (evt.target.closest('.item-cart__color')) {
			const parent = evt.target.parentElement;
			const colors = parent.querySelectorAll('.item-cart__color');

			colors.forEach((color) => {
				color.classList.remove('item-cart__color--current');
			});

			evt.target.classList.add('item-cart__color--current');
		}

		if (evt.target.closest('.product__color')) {
			const parent = evt.target.parentElement;
			const colors = parent.querySelectorAll('.product__color');

			colors.forEach((color) => {
				color.classList.remove('product__color--current');
			});

			evt.target.classList.add('product__color--current');
		}
	});
};
