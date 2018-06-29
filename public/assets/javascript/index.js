$(() => {
	console.log('Page JS loaded');

	// Scroll from hero to intro
	$('.hero-island-button > button').on('click', () => {
		scrollTo('.intro');
	});

	// Scroll from projects to contact
	$('.projects-subheader-text > a').on('click', () => {
		scrollTo('.contact', true);
	});

	let modalAnimated = false;
	// Modal animation
	$('.contact-button > button').on('click', function () {
		if (modalAnimated === false) {
			// Set to true to precent mutliple animations
			modalAnimated = true;
			// Create expander
			let position = $(this).offset()
			$('<div class="invisible-expand">')
				.css({
					'left': position.left + ($(this).outerWidth() / 2),
					'top': position.top + $(this).outerHeight() / 2
				})
				.appendTo(document.body);
			// Locks scrolling
			$.scrollLock(true);
			// Animates button
			$(this).animate({
				'width': $(this).outerHeight(),
				'height': $(this).outerHeight(),
				'color': 'transparent',
				'font-size': '0px',
				'border-radius': '2rem',
			}, 1000, 'easeOutElastic', () => {
				// Expands button and shows modal
				let viewHeight = $(window).height() * 2;
				let viewWidth = $(window).width() * 2;
				let expandpx = Math.max(viewHeight, viewWidth)
				$('.invisible-expand').animate({
					height: `+=${expandpx}px`,
					top: `-=${expandpx / 2}px`,
					width: `+=${expandpx}px`,
					left: `-=${expandpx / 2}px`,
					'background-color': '#222'
				}, 1500, 'easeOutCubic');
				$('.contact-modal').animate({
					opacity: '1'
				}, 1500, 'easeOutCubic')
				$('.contact-modal').css({ display: 'flex' });
			})
		}
	});

	$('.contact-model-close').on('click', function () {
		console.log('sup');
	})

	// Smooth Scroll function
	const scrollTo = (selector, offset) => {
		let newPos = (offset) ? $(selector).offset().top - ($(window).height() / 2.6) : $(selector).offset().top;		
		$('html, body').animate({
			scrollTop: newPos
		}, 1000, 'easeOutCubic');
	}


});

