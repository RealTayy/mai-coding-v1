$(() => {
	console.log('Page JS loaded');
	$('.hero-island-button > button').on('click', () => {
		scrollTo('.intro');
	});

	$('.projects-subheader-text > a').on('click', () => {
		scrollTo('.contact', true);
	});


	const scrollTo = (selector, offset) => {
		let newPos = (offset) ? $(selector).offset().top - ($(window).height() / 2.6) : $(selector).offset().top;
		// console.log(speed);
		$('html, body').animate({
			scrollTop: newPos
		}, 1000, 'easeOutCubic');
	}
});