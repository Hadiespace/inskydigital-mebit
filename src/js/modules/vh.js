const onHeightResize = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const changeMenuHeight = () => {
	onHeightResize();
	window.addEventListener('resize', onHeightResize);
	window.addEventListener('scroll', onHeightResize);
};
