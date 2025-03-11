const sectionsJS6 = document.querySelectorAll(
	'.wrapper-js6 section'
);
console.log(sectionsJS6);

window.onscroll = () => {
	sectionsJS6.forEach(section => {
		const scrollDist = window.scrollY;
		const sectionDist = section.offsetTop;
		if (scrollDist >= sectionDist) {
			section.classList.add('show-animate');
		}
	});
};
