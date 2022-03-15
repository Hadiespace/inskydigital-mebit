const checkChoices = document.querySelectorAll('.choice-check');
const popupChoices = document.querySelectorAll('.choice-popup');
const radioChoices = document.querySelectorAll('.choice-radio');

document.addEventListener('mousedown', (evt) => {
	if (evt.target.classList.contains('choice-check__button')) {
		evt.preventDefault();
	}
});

export const createChoice = () => {
	if (checkChoices) {
		document.addEventListener('click', (evt) => {
			if (evt.target.classList.contains('choice-check__button')) {
				const choice = evt.target.parentElement;
				if (choice.classList.contains('choice-check--active')) {
					choice.classList.remove('choice-check--active');
					document.body.classList.remove('choice-open');
					choice.nextElementSibling.classList.add('choice-popup--active');
					document.body.classList.add('choice-popup-open');
				} else {
					checkChoices.forEach((elem) => elem.classList.remove('choice-check--active'));
					choice.classList.add('choice-check--active');
					document.body.classList.add('choice-open');
					popupChoices.forEach((elem) => elem.classList.remove('choice-popup--active'));
					document.body.classList.remove('choice-popup-open');
				}
			}

			if (document.body.classList.contains('choice-popup-open')) {
				if (!evt.target.closest('.choice-check')
					&& !evt.target.closest('.choice-popup')
					&& !evt.target.closest('.range')) {
					popupChoices.forEach((elem) => {
						elem.classList.remove('choice-popup--active');
					});
					document.body.classList.remove('choice-popup-open');
				}
			}

			if (document.body.classList.contains('choice-open')) {
				if (!evt.target.closest('.choice-check')) {
					checkChoices.forEach((elem) => {
						if (elem.classList.contains('choice-check--active')) {
							elem.classList.remove('choice-check--active');
							elem.nextElementSibling.classList.add('choice-popup--active');
							document.body.classList.add('choice-popup-open');
						}
					});
				}
			}

			if (evt.target.classList.contains('choice-popup__close')) {
				evt.target.parentElement.classList.remove('choice-popup--active');
				document.body.classList.remove('choice-popup-open');
			}

			if (evt.target.closest('.choice-check__factory')) {
				const list = evt.target.parentElement.parentElement;
				const inputs = list.querySelectorAll('input');
				const button = list.previousElementSibling;
				const defaultValue = list.nextElementSibling;

				const currentValue = [];

				setTimeout(() => {
					inputs.forEach((input) => {
						if (input.checked) {
							currentValue.push(input.value);
						}
					});

					const newValue = Object.values(currentValue).join(', ');
					if (newValue === '') {
						button.querySelector('span').textContent = defaultValue.textContent;
					} else {
						button.querySelector('span').textContent = newValue;
					}
				}, 0);

			}
		});
	}

	if (radioChoices) {
		document.addEventListener('click', (evt) => {
			if (evt.target.closest('.choice-radio__button')) {
				const form = evt.target.parentElement;

				if (form.classList.contains('choice-radio--active')) {
					document.body.classList.remove('choice-radio-open');
					form.classList.remove('choice-radio--active');
				} else {
					document.body.classList.add('choice-radio-open');
					form.classList.add('choice-radio--active');
				}
			}

			if (document.body.classList.contains('choice-radio-open')) {
				if (!evt.target.closest('.choice-radio')) {
					radioChoices.forEach((elem) => {
						if (elem.classList.contains('choice-radio--active')) {
							elem.classList.remove('choice-radio--active');
							document.body.classList.remove('choice-radio-open');
						}
					});
				}
			}

			if (evt.target.closest('.choice-radio__factory')) {
				const form = evt.target.parentElement.parentElement.parentElement;
				const labels = evt.target.parentElement.parentElement.querySelectorAll('.choice-radio__factory');
				const value = evt.target.textContent;
				const button = evt.target.parentElement.parentElement.previousElementSibling;

				button.querySelector('span').textContent = value;
				labels.forEach((label) => label.classList.remove('choice-radio__factory--current'));
				evt.target.classList.add('choice-radio__factory--current');
				document.body.classList.remove('choice-radio-open');
				form.classList.remove('choice-radio--active');
			}
		});
	}
};
