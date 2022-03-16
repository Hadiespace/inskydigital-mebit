import Inputmask from 'inputmask';

// console.log(Inputmask.default);

const phones = document.querySelectorAll('input[type="tel"]');

export const initPhoneMask = () => Inputmask.default(
	{ 'mask': '+7 (999) 999-99-99', 'clearIncomplete': false }
).mask(phones);
