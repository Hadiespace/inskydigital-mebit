const designWrap = document.querySelector('.design-modal__file-wrap');
const designFiles = document.querySelector('.design-modal__files');
const designInputs = designWrap.querySelectorAll('input');

function cleanFormFile(evt) {
	if (evt.target.closest('.design-modal__input-button')) {
		evt.preventDefault();
		const inputHref = evt.target.getAttribute('data-name');
		const inputFile = document.getElementsByName(inputHref)[0];
		inputFile.value = '';
		inputFile.classList.remove('design-modal__file-input--active');
		evt.target.parentElement.remove();
	}
}

export const createDesignFiles = () => {
	if (designInputs) {
		for (let index = 0; index < designInputs.length; index++) {
			const input = designInputs[index];

			input.addEventListener('change', () => {
				const fileWrap = document.createElement('div');
				fileWrap.className = 'design-modal__input-file';
				fileWrap.innerHTML = `
					<span class="design-modal__input-name"}>${input.files[0].name}</span>
					<a class="design-modal__input-button" data-name="${input.getAttribute('name')}"></a>
				`;

				input.classList.add('design-modal__file-input--active');
				designFiles.appendChild(fileWrap);
			});
		}

		document.addEventListener('click', cleanFormFile);
	}
};
