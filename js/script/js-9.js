const sunJS9 = document.querySelector(
	'.wrapper-js9 .sun'
);
const sceneJS9 = document.querySelector(
	'.wrapper-js9 .scene'
);

sunJS9.addEventListener('click', () => {
	sceneJS9.classList.toggle('night');
	sunJS9.classList.toggle('active');
});
