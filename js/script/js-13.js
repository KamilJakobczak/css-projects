const containerJS13 = document.querySelector('.js-13');

for (let i = 0; i < 20; i++) {
	const glitchBox = document.createElement('div');
	glitchBox.classList.add('box');
	containerJS13.appendChild(glitchBox);
}

setInterval(() => {
	const glitches = document.querySelectorAll('.box');

	glitches.forEach(glitch => {
		glitch.style.left = Math.random() * 100 + 'dvw';
		glitch.style.top = Math.random() * 100 + 'dvw';
		glitch.style.width = Math.random() * 400 + 'px';
		glitch.style.height = Math.random() * 100 + 'px';
		glitch.style.backgroundPosition =
			Math.random() * 50 + 'px';
	});
}, 500);
