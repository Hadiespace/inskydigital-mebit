export const findVideos = () => {
	let isOpen = false;
	document.addEventListener('click', (evt) => {
		if (evt.target.closest('.video')) {
			document.querySelector('.video').classList.add('video--visible');

			const player = document.querySelector('.vjs-big-play-button');

			if (!isOpen) {
				player.click();
				isOpen = true;
			}
		}
	});
};
