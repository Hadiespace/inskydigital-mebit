import { fromModalsToSuccess } from './modal.js';
import { validateForm } from './validate.js';

const forms = document.querySelectorAll('form');
const navigationSearch = document.querySelector('.navigation-search');

export const sendForm = () => {
	window.addEventListener('DOMContentLoaded', () => {
		forms.forEach((form) => {
			const fetchPath = form.getAttribute('action');

			if (!form.classList.contains('product-navigation__form')) {
				form.addEventListener('submit', async (evt) => {
					evt.preventDefault();
					const error = validateForm(form);
					if (error === 0) {
						const inputs = form.querySelectorAll('.design-modal__file-input');
						const designFiles = form.querySelector('.design-modal__files');
						const formData = new FormData(form);

						// const request = await fetch(fetchPath, {
						// 	method: 'POST',
						// 	body: formData,
						// });

						// const response = await request.json();
						// if (response.success) {
						fromModalsToSuccess();
						form.reset();
						if (inputs) {
							inputs.forEach((input) => input.classList.remove('design-modal__file-input--active'));
							designFiles.innerHTML = '';
						}
						// }
					}
				});
			} else {
				form.addEventListener('submit', (evt) => {
					evt.preventDefault();
					const navigationWrapper = document.querySelector('.product-navigation__catalog-wrapper');
					const value = navigationWrapper.clientWidth;

					navigationSearch.classList.add('navigation-search--visible');
					navigationSearch.style.setProperty('--padding', `${value + 1}px`);
				});
			}
		});
	});
};
