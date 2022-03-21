export const getAnother = () => {
	const oldLists = document.querySelectorAll('.navigation-catalog');

	if (oldLists) {
		oldLists.forEach((list) => {
			list.style.zIndex = '2';
			list.style.setProperty('--padding', '288px');
		});
	}

	const kek = (evt) => {
		const navigationWrapper = document.querySelector('.product-navigation__catalog-wrapper');
		const value = navigationWrapper.clientWidth;
		if (evt.target.classList.contains('panel-item__link') ||
			evt.target.classList.contains('panel-item__button')) {
			const lists = evt.target.parentElement.querySelectorAll('.navigation-catalog');
			if (lists) {
				lists.forEach((list) => {
					list.style.zIndex = '2';
					list.style.setProperty('--padding', `${value + 1}px`);
				});
			}
		}

		if (evt.target.classList.contains('panel-item')) {
			const lists = evt.target.querySelectorAll('.navigation-catalog');
			if (lists) {
				lists.forEach((list) => {
					list.style.zIndex = '2';
					list.style.setProperty('--padding', `${value + 1}px`);
				});
			}
		}
	};

	document.addEventListener('touchstart', (evt) => {
		setTimeout(() => {
			kek(evt);
		}, 300);
	});

	document.addEventListener('mousemove', (evt) => {
		setTimeout(() => {
			kek(evt);
		}, 300);
	});

	document.addEventListener('click', (evt) => {
		if (evt.target.classList.contains('.panel-item__link span')) {
			evt.preventDefault();
		}
	});

	// Форма

	const productNavigationForm = document.querySelector('.product-navigation__form');
	const productNavigation = document.querySelector('.product-navigation');
	const navigationSearch = document.querySelector('.navigation-search');
	const navigationSubmit = document.querySelector('.product-navigation__submit');
	const navigationInput = document.querySelector('.product-navigation__input');

	navigationSubmit.addEventListener('click', (evt) => {
		if (navigationInput.value.trim() === '') {
			evt.preventDefault();
			navigationInput.focus();
		}
	});

	navigationInput.addEventListener('input', (evt) => {
		if (evt.target.value.trim() !== '') {
			productNavigation.classList.add('product-navigation--visible');
		} else {
			productNavigation.classList.remove('product-navigation--visible');
			navigationSearch.classList.remove('navigation-search--visible');
		}
	});

	document.addEventListener('click', (evt) => {
		if (evt.target.closest('.navigation-search__close')) {
			navigationInput.value = '';
			navigationInput.blur();
			productNavigation.classList.remove('product-navigation--visible');
			navigationSearch.classList.remove('navigation-search--visible');
		}
	});
};
