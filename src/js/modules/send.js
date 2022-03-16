import { fromModalsToSuccess } from './modal.js';
import { validateForm } from './validate.js';

const forms = document.querySelectorAll('form');

export const sendForm = () => {
	window.addEventListener('DOMContentLoaded', () => {
		forms.forEach((form) => {
			const fetchPath = form.getAttribute('action');

			form.addEventListener('submit', async (evt) => {
				evt.preventDefault();
				const error = validateForm(form);
				if (error === 0) {
					const formData = new FormData(form);

					// const request = await fetch(fetchPath, {
					// 	method: 'POST',
					// 	body: formData,
					// });

					// const response = await request.json();
					// if (response.success) {
					fromModalsToSuccess();
					form.reset();
					// }
				}
			});
		});
	});
};
