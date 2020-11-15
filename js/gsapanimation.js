// var tween1 = gsap.to('.mycolumn1', {
// 	stagger: 0.5,
// 	duration: 0.5,
// 	opacity: 1,
// 	ease: 'none',
// 	paused: false
// });
var tween2 = gsap.to('.mycolumn2', {
	stagger: 0.5,
	duration: 0.5,
	opacity: 1,
	ease: 'none',
	paused: false
});
var tween3 = gsap.to('.mycolumn3', {
	stagger: 0.5,
	duration: 0.5,
	opacity: 1,
	ease: 'none',
	paused: false
});

document.querySelector('#myportfolio').onclick = () => {
	// tween1.restart();
	tween2.restart();
	tween3.restart();
};
// document.querySelector('#backend').onclick = () => tween1.restart();
document.querySelector('#frontend').onclick = () => tween2.restart();
document.querySelector('#mobile').onclick = () => tween3.restart();
