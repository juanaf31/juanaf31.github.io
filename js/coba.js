let clicked = false;
const anim = gsap
	.timeline({ paused: true })
	.to('#home h1', 0.5, {
		opacity: -1
	})
	.to('.one', 0.8, {
		y: 12,
		rotation: 45,
		ease: Expo.easeInOut
	})
	.to('.three', 0.8, {
		y: -12,
		rotation: -45,
		ease: Expo.easeInOut,
		delay: -0.8
	})
	.to('.two', 0.8, {
		opacity: 0,
		ease: Expo.easeInOut,
		delay: -1
	})
	.to('.menu', 2, {
		top: '0%',
		ease: Expo.easeInOut,
		delay: -2
	})
	.staggerFrom(
		'.menu ul li',
		1.5,
		{
			x: -200,
			opacity: 0,
			ease: Expo.easeInOut
		},
		0.3
	)
	.add('nav-end');
let animabout = gsap
	.timeline({ paused: true })
	.to('#home', 1, {
		opacity: 0,
		y: -220,
		ease: Expo.easeInOut,
		delay: 5
	})
	.to('#about', 1, {
		ease: Expo.easeInOut
	});
let animservices = gsap
	.timeline({ paused: true })
	.to('#about', 1, {
		opacity: 0,
		y: -220,
		ease: Expo.easeInOut,
		delay: 5
	})
	.to('#services', 1, {
		ease: Expo.easeInOut
	});

// const accordionItems = [ ...document.querySelectorAll('.accordion__item') ];
// accordionItems.forEach((item) => {
// 	const accordionContent = item.querySelector('.accordion__content');
// 	const accordionButton = item.querySelector('button');

// 	const master = gsap.fromTo(
// 		accordionContent,
// 		{ height: 0 },
// 		{
// 			height: 'auto',
// 			ease: 'power4.inOut',
// 			reversed: true,
// 			duration: 1
// 		}
// 	);

// 	if (item.hasAttribute([ 'data-accordion-open' ])) {
// 		master.progress(1);
// 		master.play();
// 	}

// 	accordionButton.addEventListener('click', () => {
// 		master.reversed() ? master.play() : master.reverse();
// 	});
// });

$(document).on('click', '.toggle-btn', function() {
	clicked = !clicked;
	clicked == true ? anim.tweenFromTo(0, 'nav-end') : anim.tweenFromTo('nav-end', 0);
});
document.getElementById('about-btn').addEventListener('click', function() {
	clicked = !clicked;
	anim.tweenFromTo('nav-end', 0);
	animabout.play();
});
document.getElementById('services-btn').addEventListener('click', function() {
	clicked = !clicked;
	anim.tweenFromTo('nav-end', 0);
	animservices.play();
});
document.getElementById('home-btn').addEventListener('click', function() {
	clicked = !clicked;
	anim.tweenFromTo('nav-end', 0);
	animabout.reverse();
});
