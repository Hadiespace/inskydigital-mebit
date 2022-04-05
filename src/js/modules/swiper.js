import Swiper, { Navigation, Pagination, Autoplay, Thumbs, Controller } from 'swiper';
const preview = document.querySelector('.preview');
const homeNew = document.querySelector('.home-new');
const homeSpecial = document.querySelector('.home-special');
const about = document.querySelector('.about');
const aboutPhotos = document.querySelector('.about-photos');
const cards = document.querySelectorAll('.card');
const simpleCard = document.querySelectorAll('.simple-card');
const products = document.querySelectorAll('.product');
const results = document.querySelectorAll('.result__swiper-wrap');
// const settModal = document.querySelector('.sett-modal');
// const simpleModal = document.querySelector('.simple-modal');
const settFormModal = document.querySelector('.sett-form-modal');
const texture = document.querySelector('.texture');

const createPreviewSwiper = () => {
	if (preview) {
		const previewSwiper = preview.querySelector('.preview .swiper');
		const next = preview.querySelector('.preview__swiper-button--next');
		const prev = preview.querySelector('.preview__swiper-button--prev');
		const dots = preview.querySelector('.preview__swiper-dots');

		new Swiper(previewSwiper, {
			modules: [Navigation, Pagination, Autoplay],
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
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
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
				767: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 2,
					spaceBetween: 30,
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

const createAboutSwiper = () => {
	if (about) {
		const aboutSwiper = about.querySelector('.about .swiper');
		const next = about.querySelector('.about__swiper-button--next');
		const prev = about.querySelector('.about__swiper-button--prev');
		const dots = about.querySelector('.about__swiper-dots');

		new Swiper(aboutSwiper, {
			modules: [Navigation, Pagination, Autoplay],
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
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

const createAboutPhotosSwiper = () => {
	if (aboutPhotos) {
		const aboutPhotosSwiper = aboutPhotos.querySelector('.about-photos .swiper');
		const next = aboutPhotos.querySelector('.about-photos__swiper-button--next');
		const prev = aboutPhotos.querySelector('.about-photos__swiper-button--prev');
		const dots = aboutPhotos.querySelector('.about-photos__swiper-dots');

		new Swiper(aboutPhotosSwiper, {
			modules: [Navigation, Pagination, Autoplay],
			autoplay: {
				delay: 5000,
			},
			autoHeight: true,
			slidesPerView: 1,
			loop: true,
			speed: 300,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
				1280: {
					allowTouchMove: false,
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

const createCardsSwiper = () => {
	if (cards) {
		cards.forEach((card) => {
			const cardSwiper = card.querySelector('.card .swiper');
			const dots = card.querySelector('.active-card__swiper-dots');

			new Swiper(cardSwiper, {
				modules: [Navigation, Pagination],
				autoHeight: true,
				slidesPerView: 1,
				loop: true,
				speed: 300,
				pagination: {
					el: dots,
					type: 'bullets',
					clickable: true,
				},
			});
		});
	}
};

const createSimpleCardSwiper = () => {
	if (simpleCard) {
		simpleCard.forEach((card) => {
			const simpleCardSwiper = card.querySelector('.simple-card .swiper');
			const next = card.querySelector('.simple-card__swiper-button--next');
			const prev = card.querySelector('.simple-card__swiper-button--prev');
			const dots = card.querySelector('.simple-card__swiper-dots');

			new Swiper(simpleCardSwiper, {
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
						spaceBetween: 10,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1340: {
						slidesPerView: 4,
						allowTouchMove: false,
					},
					1600: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				},
				pagination: {
					el: dots,
					type: 'bullets',
					clickable: true,
				},
			});
		});
	}
};

const createTextureSwiper = () => {
	if (texture) {
		const textureSwiper = texture.querySelector('.texture .swiper');
		const next = texture.querySelector('.texture__swiper-button--next');
		const prev = texture.querySelector('.texture__swiper-button--prev');
		const dots = texture.querySelector('.texture__swiper-dots');

		new Swiper(textureSwiper, {
			modules: [Navigation, Pagination],
			speed: 300,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1340: {
					slidesPerView: 4,
					allowTouchMove: false,
				},
				1600: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
			},
			pagination: {
				el: dots,
				type: 'bullets',
				clickable: true,
			},
		});

		const slides = texture.querySelectorAll('.texture__swiper-slide');

		slides[0].querySelector('.texture__check').classList.add('texture__check--active');
		document.addEventListener('click', (evt) => {
			if (evt.target.closest('.texture__swiper-link')) {
				evt.preventDefault();
				slides.forEach((slide) => slide.querySelector('.texture__check').classList.remove('texture__check--active'));

				const check = evt.target.parentElement.parentElement.querySelector('.texture__check');
				check.classList.add('texture__check--active');
			}
		});
	}
};

const createProductSwiper = () => {
	if (products) {
		products.forEach((product) => {
			const productSwiper = product.querySelector('.product__swiper-top-container .swiper');
			const productSwiper2 = product.querySelector('.product__swiper-container .swiper');
			const next = product.querySelector('.product__swiper-button--next');
			const prev = product.querySelector('.product__swiper-button--prev');
			const dots = product.querySelector('.product__swiper-dots');

			const loopModal = document.querySelector('.loop-modal .swiper');
			const loopNext = document.querySelector('.loop-modal__swiper-button--next');
			const loopPrev = document.querySelector('.loop-modal__swiper-button--prev');
			const loopDots = document.querySelector('.loop-modal__dots');

			const swiper = new Swiper(productSwiper2, {
				modules: [Navigation, Controller],
				loop: true,
				speed: 300,
				spaceBetween: 20,
				watchSlidesProgress: true,
				navigation: {
					nextEl: next,
					prevEl: prev,
				},
				breakpoints: {
					1023: {
						slidesPerView: 3,
					},
					1340: {
						slidesPerView: 4,
						allowTouchMove: false,
					},
					1600: {
						slidesPerView: 4,
					},
				},
			});

			const swiper3 = new Swiper(productSwiper, {
				modules: [Navigation, Pagination, Thumbs, Controller],
				loop: true,
				spaceBetween: 20,
				speed: 300,
				navigation: {
					nextEl: next,
					prevEl: prev,
				},
				pagination: {
					el: dots,
					type: 'bullets',
					clickable: true,
				},
				thumbs: {
					swiper: swiper,
				},
			});

			const swiper2 = new Swiper(loopModal, {
				modules: [Navigation, Pagination, Controller],
				loop: true,
				slidesPerView: 1,
				speed: 300,
				// spaceBetween: 20,
				watchSlidesProgress: true,
				navigation: {
					nextEl: loopNext,
					prevEl: loopPrev,
				},
				pagination: {
					el: loopDots,
					type: 'bullets',
					clickable: true,
				},
			});

			swiper3.controller.control = swiper2;
			swiper2.controller.control = swiper3;
		});
	}
};

const createResultSwiper = () => {
	if (results) {
		results.forEach((card) => {
			const swiper = card.querySelector('.swiper');
			const next = card.querySelector('.result__swiper-button--next');
			const prev = card.querySelector('.result__swiper-button--prev');
			const dots = card.querySelector('.result__swiper-dots');
			setTimeout(() => {
				const buttons = card.querySelector('.result__buttons');
				const image = card.querySelector('.stock-card__image');

				buttons.style.height = `${image.clientHeight}px`;

				window.addEventListener('resize', () => {
					card.querySelector('.result__buttons').style.height = `${card.querySelector('.stock-card__image').clientHeight}px`;
				});
			}, 0);


			new Swiper(swiper, {
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
						spaceBetween: 10,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1340: {
						slidesPerView: 4,
						spaceBetween: 30,
						allowTouchMove: false,
					},
					1600: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
				},
				pagination: {
					el: dots,
					type: 'bullets',
					clickable: true,
				},
			});
		});
	}
};

// const createSettModalSwiper = () => {
// 	if (settModal) {
// 		const swiper = settModal.querySelector('.swiper');
// 		const next = settModal.querySelector('.sett-modal__button--next');
// 		const prev = settModal.querySelector('.sett-modal__button--prev');
// 		const dots = settModal.querySelector('.sett-modal__dots');

// 		const settSwiper = new Swiper(swiper, {
// 			modules: [Navigation, Pagination],
// 			loop: true,
// 			slidesPerView: 1,
// 			speed: 300,
// 			navigation: {
// 				nextEl: next,
// 				prevEl: prev,
// 			},
// 			pagination: {
// 				el: dots,
// 				type: 'bullets',
// 				clickable: true,
// 			},
// 		});
// 	}
// };

// const createSimpleModalSwiper = () => {
// 	if (simpleModal) {
// 		const swiper = simpleModal.querySelector('.swiper');
// 		const next = simpleModal.querySelector('.simple-modal__button--next');
// 		const prev = simpleModal.querySelector('.simple-modal__button--prev');
// 		const dots = simpleModal.querySelector('.simple-modal__dots');

// 		new Swiper(swiper, {
// 			modules: [Navigation, Pagination],
// 			loop: true,
// 			slidesPerView: 1,
// 			speed: 300,
// 			navigation: {
// 				nextEl: next,
// 				prevEl: prev,
// 			},
// 			pagination: {
// 				el: dots,
// 				type: 'bullets',
// 				clickable: true,
// 			},
// 		});
// 	}
// };

const createSettFormModalSwiper = () => {
	if (settFormModal) {
		const settFormModalSwiper = settFormModal.querySelector('.sett-form-modal__swiper');
		const productSwiper2 = settFormModal.querySelector('.sett-form-modal__swiper2');
		const next = settFormModal.querySelector('.sett-form-modal__button--next');
		const prev = settFormModal.querySelector('.sett-form-modal__button--prev');

		const swiper = new Swiper(productSwiper2, {
			modules: [Navigation],
			loop: true,
			speed: 300,
			spaceBetween: 20,
			watchSlidesProgress: true,
			slidesPerView: 4,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
		});

		new Swiper(settFormModalSwiper, {
			modules: [Navigation, Thumbs],
			loop: true,
			spaceBetween: 20,
			speed: 300,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}
};

export const generateSwiper = () => {
	createPreviewSwiper();
	createHomeNewSwiper();
	createHomeSpecialSwiper();
	createAboutSwiper();
	createAboutPhotosSwiper();
	createCardsSwiper();
	createSimpleCardSwiper();
	createProductSwiper();
	createResultSwiper();
	// createSettModalSwiper();
	// createSimpleModalSwiper();
	createSettFormModalSwiper();
	createTextureSwiper();
};
