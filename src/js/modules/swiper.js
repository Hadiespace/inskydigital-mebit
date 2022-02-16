import Swiper, { Navigation, Pagination } from 'swiper';
const preview = document.querySelector('.preview');
const homeNew = document.querySelector('.home-new');
const homeSpecial = document.querySelector('.home-special');

const createPreviewSwiper = () => {
	if (preview) {
		const previewSwiper = preview.querySelector('.preview .swiper');
		const next = preview.querySelector('.preview__swiper-button--next');
		const prev = preview.querySelector('.preview__swiper-button--prev');
		const dots = preview.querySelector('.preview__swiper-dots');

		new Swiper(previewSwiper, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			loop: true,
			speed: 300,
			allowTouchMove: true,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			pagination: {
				el: dots,
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				1024: {
					allowTouchMove: false,
				},
			},
		});
	}
};

const createHomeNewSwiper = () => {
	if (homeNew) {
		const homeNewSwiper = homeNew.querySelector('.home-new .swiper');
		const next = homeNew.querySelector('.home-new__swiper-button--next');
		const prev = homeNew.querySelector('.home-new__swiper-button--prev');

		new Swiper(homeNewSwiper, {
			modules: [Navigation],
			slidesPerView: 'auto',
			loop: true,
			speed: 300,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
				320: {
					slidesPerView: 'auto',
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 'auto',
					spaceBetween: 30,
				},
				1280: {
					slidesPerView: 'auto',
					allowTouchMove: false,
					spaceBetween: 40,
				},
			},
		});

		next.addEventListener('click', () => {
			const list = homeNewSwiper.querySelector('.swiper-wrapper');
			const size = homeNewSwiper.querySelector('.swiper-slide-next');
			list.style.left = `${size.clientWidth + 40}px`;
		});

		prev.addEventListener('click', () => {
			const list = homeNewSwiper.querySelector('.swiper-wrapper');
			const size = homeNewSwiper.querySelector('.swiper-slide-prev');
			if (size.classList.contains('swiper-slide-duplicate')) {
				list.style.left = '0';
			} else {
				list.style.left = `${size.clientWidth + 40}px`;
			}
		});
	}
};

const createHomeSpecialSwiper = () => {
	if (homeSpecial) {
		const homeSpecialSwiper = homeSpecial.querySelector('.home-special .swiper');
		const next = homeSpecial.querySelector('.home-special__swiper-button--next');
		const prev = homeSpecial.querySelector('.home-special__swiper-button--prev');
		const dots = homeSpecial.querySelector('.home-special__swiper-dots');

		new Swiper(homeSpecialSwiper, {
			modules: [Navigation, Pagination],
			loop: true,
			speed: 300,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 2,
				},
				1280: {
					slidesPerView: 2,
					allowTouchMove: false,
					spaceBetween: 40,
				},
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
	createHomeNewSwiper();
	createHomeSpecialSwiper();
};
