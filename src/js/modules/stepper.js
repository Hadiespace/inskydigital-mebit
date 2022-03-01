const steppers = document.querySelectorAll('.stepper');

export const createStepper = () => {
	if (steppers) {
		steppers.forEach((stepper) => {
			const stepperInput = stepper.querySelector('.stepper__input');
			const stepperButtonMinus = stepper.querySelector('.stepper__button--minus');
			const stepperButtonPlus = stepper.querySelector('.stepper__button--plus');

			let count = stepperInput.value;

			const isNotApple = () => !!/iPhone|iPad|iPod/i.test(navigator.userAgent);

			const allowNumbersOnly = (evt) => {
				const code = (evt.which) ? evt.which : evt.keyCode;
				if (code > 31 && (code < 48 || code > 57)) {
					evt.preventDefault();
				}
			};

			if (count <= 1) {
				stepperButtonMinus.classList.add('stepper__button--disabled');
			} else {
				stepperButtonMinus.classList.remove('stepper__button--disabled');
			}

			stepperInput.addEventListener('keyup', (evt) => {
				const self = evt.currentTarget;

				if (self.value <= '0' || self.value <= 0) {
					self.value = 1;
				}

				if (isNotApple) {
					stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
				} else {
					stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
				}

				count = stepperInput.value;

				if (count <= 1) {
					stepperButtonMinus.classList.add('stepper__button--disabled');
				} else {
					stepperButtonMinus.classList.remove('stepper__button--disabled');
				}
			});

			stepperInput.addEventListener('keypress', (evt) => {
				allowNumbersOnly(evt);
			});

			stepperInput.addEventListener('change', (evt) => {
				const self = evt.currentTarget;

				if (!self.value) {
					self.value = 1;
				}

				count = stepperInput.value;

				if (count <= 1) {
					stepperButtonMinus.classList.add('stepper__button--disabled');
				} else {
					stepperButtonMinus.classList.remove('stepper__button--disabled');
				}
			});

			stepperButtonPlus.addEventListener('click', (evt) => {
				evt.preventDefault();

				count++;

				if (count <= 1) {
					stepperButtonMinus.classList.add('stepper__button--disabled');
				} else {
					stepperButtonMinus.classList.remove('stepper__button--disabled');
				}

				stepperInput.value = count;

				if (isNotApple) {
					stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
				} else {
					stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
				}
			});

			stepperButtonMinus.addEventListener('click', (evt) => {
				evt.preventDefault();

				count--;

				if (count <= 1) {
					stepperButtonMinus.classList.add('stepper__button--disabled');
				} else {
					stepperButtonMinus.classList.remove('stepper__button--disabled');
				}

				stepperInput.value = count;

				if (isNotApple) {
					stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
				} else {
					stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
				}
			});
		});
	}
};
