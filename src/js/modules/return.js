export const scrollToStart = () => {
	document.addEventListener('click', (evt) => {
		if (evt.target.closest('.footer__return')) {
			window.scrollTo(0, 0);
		}
	});
};
