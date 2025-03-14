const wrapperJS10 = document.querySelector(
	'.js-10_wrapper'
);
const toggleJS10 = document.querySelector(
	'.js-10_wrapper .toggle'
);

toggleJS10.addEventListener('click', () => {
	console.log(wrapperJS10);
	wrapperJS10.classList.toggle('active');
});
