

export const toggleLetters = () => {
	document.addEventListener('click', (evt) => {
		if (evt.target.classList.contains('factories__letter')) {
			const button = evt.target;

			if (button.getAttribute('aria-expanded') === 'false') {
				button.setAttribute('aria-expanded', 'true');
				button.nextElementSibling.classList.add('factories__list--visible');
			} else {
				button.setAttribute('aria-expanded', 'false');
				button.nextElementSibling.classList.remove('factories__list--visible');
			}
		}
	});
};
