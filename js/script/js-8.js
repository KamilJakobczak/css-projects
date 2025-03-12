const sectionJS8 = document.querySelector(
	'.wrapper-js8 section'
);
let i = 0;

while (i < 200) {
	const star = document.createElement('i');
	const size = Math.random() * 4;
	const duration = Math.random() * 2;
	const x = Math.floor(
		Math.random() * window.innerWidth
	);
	const y = Math.floor(
		Math.random() * window.innerHeight
	);

	star.style.left = x + 'px';
	star.style.top = y + 'px';
	star.style.width = 1 + size + 'px';
	star.style.height = 1 + size + 'px';
	star.style.animationDuration = 2 + duration + 's';

	sectionJS8.appendChild(star);
	i++;
}
