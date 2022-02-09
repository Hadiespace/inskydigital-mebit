const pageNavigation = document.querySelector('.page-navigation');

const scrollNavigation = () => {
	if (window.pageYOffset >= 40) {
		pageNavigation.classList.add('page-navigation--scroll');
	} else {
		pageNavigation.classList.remove('page-navigation--scroll');
	}
};

export const scrollHeader = () => {
	scrollNavigation();
	window.addEventListener('scroll', () => {
		scrollNavigation();
	});
};
