export const findVideos = () => {
	document.addEventListener('click', (evt) => {
		if (evt.target.closest('.video')) {
			document.querySelector('.video').classList.add('video--visible');
		}
	});
};
