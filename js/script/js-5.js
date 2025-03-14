const circle1JS5 = document.querySelector(
	'.circle1-js5'
);
const circle2JS5 = document.querySelector(
	'.circle2-js5'
);

window.addEventListener('scroll', () => {
	const value = window.scrollY;
	circle1JS5.style.clipPath = `circle(${
		150 * value * 0.0016
	}px at 0 0)`;
	circle2JS5.style.clipPath = `circle(${
		150 * value * 0.0016
	}px at 100% 100%)`;
});
