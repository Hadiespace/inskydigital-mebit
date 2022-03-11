/* eslint-disable no-undef */
import './nouislider.js';

const ranges = document.querySelectorAll('.range');
const checkChoices = document.querySelectorAll('.choice-check');
const popupChoices = document.querySelectorAll('.choice-popup');

export const createRange = () => {
	ranges.forEach((element) => {
		if (element) {
			const slider = element.querySelector('.range__slider');
			const min = element.querySelector('.range__value--min .range__input');
			const max = element.querySelector('.range__value--max .range__input');
			const val = element.querySelector('.range__val');

			const range = noUiSlider.create(slider, {
				start: [+min.value, +max.value],
				connect: true,
				step: 1,
				range: {
					'min': +min.min,
					'max': +max.max,
				},
				format: {
					to: function (value) {
						if (Number.isInteger(value)) {
							return value.toFixed(0);
						}
						return value.toFixed(0);
					},
					from: function (value) {
						return parseFloat(value);
					},
				},
			});

			if (element.classList.contains('range--cost')) {
				range.on('update', (values) => {
					min.value = `${values[0]} ${val.textContent}`;
					max.value = `${values[1]} ${val.textContent}`;
				});
			} else {
				range.on('update', (values) => {
					min.value = `${values[0]}`;
					max.value = `${values[1]}`;
				});
			}

			range.on('change', () => {
				checkChoices.forEach((elem) => elem.classList.remove('choice-check--active'));
				popupChoices.forEach((elem) => elem.classList.remove('choice-popup--active'));
				const popup = slider.parentElement.nextElementSibling;
				popup.classList.add('choice-popup--active');
				document.body.classList.add('choice-popup-open');
			});
		}
	});
};
