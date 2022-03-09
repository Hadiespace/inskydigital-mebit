export const createCost = () => {
	document.addEventListener('click', (evt) => {
		if (evt.target.closest('.cost')) {
			const costValues = document.querySelectorAll('.cost__value');

			costValues.forEach((value) => value.classList.toggle('cost__value--current'));
		}
	});
};
