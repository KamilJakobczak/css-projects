const text = document.querySelector('.text-1');

let spans = text.innerText
	.split('')
	.map((letter, i) => {
		return `<span style="transition-delay:${
			i * 40
		}ms; filter:hue-rotate(${
			i * 30
		}deg)">${letter}</span>`;
	})
	.join('');

text.innerHTML = spans;
