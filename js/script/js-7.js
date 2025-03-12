const bgJS7 = document.querySelector(
	'.wrapper-js7 .bg'
);

window.addEventListener('scroll', () => {
	bgJS7.style.backgroundPosition =
		window.scrollY + 'px';
});
