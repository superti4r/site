import { gsap } from 'gsap';

export const runHeroAnimation = () => {
	const items = document.querySelectorAll('[data-gsap-hero]');

	items.forEach((el, i) => {
		gsap.set(el, {
			scale: 0.8,
			filter: 'blur(0.2rem)',
			opacity: 0,
			y: -100
		});

		gsap
			.timeline({
				delay: i * 0.2
			})
			.to(el, {
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'power2.out'
			})
			.to(el, {
				scale: 1,
				filter: 'blur(0rem)',
				duration: 0.4,
				ease: 'power2.out'
			});
	});

	const button = document.querySelector('[data-hero-button]');
	if (button) {
		gsap.set(button, {
			opacity: 0,
			y: 50,
			scale: 0.95
		});

		gsap.to(button, {
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 0.6,
			delay: 1.4,
			ease: 'back.out(1.7)'
		});
	}

	const cats = document.querySelector('[data-hero-cats]');
	if (cats) {
		gsap.set(cats, {
			opacity: 0,
			filter: 'blur(1rem)'
		});

		gsap.to(cats, {
			opacity: 1,
			duration: 1,
			delay: 1.8,
			filter: 'blur(0rem)',
			ease: 'back.out(1.4)'
		});
	}
};
