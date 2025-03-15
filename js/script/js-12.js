const videoJS12 = document.querySelector(
	'.js-12 .video'
);
const thumbnailsJS12 = document.querySelectorAll(
	'.js-12 .navigation li'
);

thumbnailsJS12.forEach((thumbnail, i) => {
	thumbnail.addEventListener('click', () => {
		videoJS12.src = `./img/js-12/video${i + 1}.mp4`;
		videoJS12.play();
	});
});
