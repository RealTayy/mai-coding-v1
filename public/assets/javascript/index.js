$(() => {
	console.log('Page JS loaded');
	// Initialize Materialize Elements	

	// Create expander for modal
	let position = $('.contact-button > button').offset()
	$('<div class="invisible-expand">')
		.css({
			'left': position.left + ($('.contact-button > button').outerWidth() / 2),
			'top': position.top + $('.contact-button > button').outerHeight() / 2
		})
		.appendTo(document.body);

	// Scroll from hero to intro
	$('.hero-island-button > a').on('click', () => {
		scrollTo('.intro');
	});

	// Scroll from projects to contact
	$('.projects-subheader-text > a').on('click', () => {
		scrollTo('.contact', true);
	});

	// Smooth Scroll function
	const scrollTo = (selector, offset) => {
		let newPos = (offset) ? $(selector).offset().top - ($(window).height() / 2.6) : $(selector).offset().top;
		$('html, body').animate({
			scrollTop: newPos
		}, 1000, 'easeOutCubic');
	}
});