const textJS1 = document.querySelector('.text-1');

let spansJS1 = textJS1.innerText
	.split('')
	.map((letter, i) => {
		return `<span style="transition-delay:${
			i * 40
		}ms; filter:hue-rotate(${
			i * 30
		}deg)">${letter}</span>`;
	})
	.join('');

textJS1.innerHTML = spansJS1;
