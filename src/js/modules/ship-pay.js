const shippingButton = document.querySelector('.ship-pay__button--shipping');
const paymentButton = document.querySelector('.ship-pay__button--payment');
const shippingContent = document.querySelector('#shipping');
const paymentContent = document.querySelector('#payment');

export const getShipPay = () => {
	if (shippingButton) {
		shippingButton.addEventListener('click', () => {
			shippingButton.setAttribute('aria-expanded', 'true');
			paymentButton.setAttribute('aria-expanded', 'false');
			shippingContent.classList.add('ship-pay__item--visible');
			paymentContent.classList.remove('ship-pay__item--visible');
		});
	}

	if (paymentButton) {
		paymentButton.addEventListener('click', () => {
			shippingButton.setAttribute('aria-expanded', 'false');
			paymentButton.setAttribute('aria-expanded', 'true');
			shippingContent.classList.remove('ship-pay__item--visible');
			paymentContent.classList.add('ship-pay__item--visible');
		});
	}
};
