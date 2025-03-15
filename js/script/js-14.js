const side1JS14 = document.querySelector(
	'.wrapper-js14 .side1'
);
const side2JS14 = document.querySelector(
	'.wrapper-js14 .side2'
);

window.addEventListener('scroll', () => {
	side1JS14.style.left = -window.scrollY + 'px';
	side2JS14.style.left = window.scrollY + 'px';
});
