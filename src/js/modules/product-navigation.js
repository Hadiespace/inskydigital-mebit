const navigation = document.querySelector('.product-navigation');
const form = navigation.querySelector('.product-navigation__form');
const catalogList = navigation.querySelector('.product-navigation__catalog-list');
const pageList = navigation.querySelector('.product-navigation__page-list');

const getHeight = () => {
	const maxHeight = window.innerHeight - pageList.clientHeight - form.clientHeight;
	catalogList.style.maxHeight = `${maxHeight}px`;
};

export const resizeCatalogList = () => {
	getHeight();

	window.addEventListener('resize', () => {
		getHeight();
	});
};

