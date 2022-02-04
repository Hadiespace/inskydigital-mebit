import Swiper, { Navigation, Pagination } from 'swiper';
const preview = document.querySelector('.preview');

const createPreviewSwiper = () => {
	const previewSwiper = preview.querySelector('.preview .swiper');

	if (previewSwiper) {
		const next = preview.querySelector('.preview__swiper-button--next');
		const prev = preview.querySelector('.preview__swiper-button--prev');
		const dots = preview.querySelector('.preview__swiper-dots');

		new Swiper(previewSwiper, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			loop: true,
			speed: 300,
			// allowTouchMove: false,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			pagination: {
				el: dots,
				type: 'bullets',
				clickable: true,
			},
		});
	}
};

export const generateSwiper = () => {
	createPreviewSwiper();
};
