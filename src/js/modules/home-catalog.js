const onTagClick = (evt) => {
	if (evt.target.closest('.home-catalog__tags')) {
		evt.target.parentElement.parentElement.querySelector('.home-catalog__link').click();
	}
};

export const clickCatalogHomeTag = () => document.addEventListener('click', onTagClick);
