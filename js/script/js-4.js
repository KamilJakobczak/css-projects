const textJS4 = document.querySelector('.text-js4');

const lettersJS4 = textJS4.textContent
	.split('')
	.map((letter, i) => {
		return `<span style="animation-duration: ${
			Math.random() * 5
		}s; filter: hue-rotate(${
			i * 50
		}deg)">${letter}</span>`;
	})
	.join('');

textJS4.innerHTML = lettersJS4;
