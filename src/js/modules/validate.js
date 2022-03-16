const onNameDigits = (evt) => {
	if ('1234567890'.indexOf(evt.key) !== -1) {
		evt.preventDefault();
	}
};

const nameInputs = document.querySelectorAll('input[name="name"]');
if (nameInputs) {
	nameInputs.forEach((input) => {
		input.addEventListener('keydown', onNameDigits);
	});
}

const addError = (input) => {
	input.parentElement.classList.add('_error');
	input.classList.add('_error');
};

const removeError = (input) => {
	input.parentElement.classList.remove('_error');
	input.classList.remove('_error');
};

const emailText = (input) => !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);

export const validateForm = (form) => {
	let error = 0;
	const formReq = form.querySelectorAll('._req');

	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];
		removeError(input);

		if (input.classList.contains('_name')) {
			const errorText = input.parentElement.querySelector('.form__error');
			if (/[0-9]/.test(input.value)) {
				errorText.textContent = 'Имя не может содержать цифры';
				addError(input);
				error++;
			} else if (input.value.trim() === '') {
				errorText.textContent = 'Это поле обязательно к заполнению';
				addError(input);
				error++;
			}
		} else if (input.classList.contains('_tel')) {
			const errorText = input.parentElement.querySelector('.form__error');
			if (/[_]/.test(input.value)) {
				errorText.textContent = 'Неверный формат';
				addError(input);
				error++;
			} else if (input.value.trim() === '') {
				errorText.textContent = 'Это поле обязательно к заполнению';
				addError(input);
				error++;
			}
		} else if (input.classList.contains('_email')) {
			if (emailText(input)) {
				addError(input);
				error++;
			}
		} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
			addError(input);
			error++;
		} else {
			if (input.value.trim() === '') {
				addError(input);
				error++;
			}
		}
	}
	return error;
};
