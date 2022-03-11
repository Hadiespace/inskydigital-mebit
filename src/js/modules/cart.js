const userCart = document.querySelector('#user-cart');
const parent = userCart.querySelectorAll('span')[1];
const value = userCart.querySelectorAll('span')[1].querySelector('span');

export const createUserCart = () => {
	if (value.textContent === '0') {
		parent.style.display = 'none';
	} else {
		parent.style.display = 'block';
	}
};
