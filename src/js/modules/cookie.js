const cookie = document.querySelector('.cookie');

export const closeCookie = () => {
	document.addEventListener('click', (evt) => {
		if (evt.target.classList.contains('cookie__close')) {
			cookie.classList.add('cookie--closed');
		}
	});
};
