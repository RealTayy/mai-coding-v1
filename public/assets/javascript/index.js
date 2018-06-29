$(() => {
	console.log('Page JS loaded');
	// Create expander for modal
	let position = $('.contact-button > button').offset()
	$('<div class="invisible-expand">')
		.css({
			'left': position.left + ($('.contact-button > button').outerWidth() / 2),
			'top': position.top + $('.contact-button > button').outerHeight() / 2
		})
		.appendTo(document.body);

	// Scroll from hero to intro
	$('.hero-island-button > button').on('click', () => {
		scrollTo('.intro');
	});

	// Scroll from projects to contact
	$('.projects-subheader-text > a').on('click', () => {
		scrollTo('.contact', true);
	});

	// Modal openanimation
	let modalAnimated = false;
	let initContactBtnWidth = $('.contact-button > button').outerWidth();	
	$('.contact-button > button').on('click', function () {
		$('.contact-modal').finish();
		$('.invisible-expand').finish();
		$('.contact-button > button').finish();
		if (modalAnimated === false) {
			// Set to true to precent mutliple animations
			modalAnimated = true;
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
	
	// Modal Close animation
	$('.contact-model-close').on('click', function () {
		$('.contact-modal').finish();
		$('.invisible-expand').finish();
		$('.contact-button > button').finish();
		$.scrollLock(false);
		// Fades modal out
		$('.contact-modal').animate({
			opacity: '0'
		}, 500, 'easeOutCirc', () => { $('.contact-modal').css({ display: 'none' }) })
		$('.invisible-expand').animate({
			height: '0',
			width: '0',
			top: `+=${$('.invisible-expand').outerHeight() / 2}`,
			left: `+=${$('.invisible-expand').outerWidth() / 2}`,
			'background-color': '#444'
		}, 500, 'easeOutCirc', () => {
			$('.contact-button > button').animate({
				'width': initContactBtnWidth,
				'color': '#ffffff',
				'font-size': '1.3rem',
				'border-radius': '.309rem'
			}, 1000, 'easeOutQuint', () => { modalAnimated = false });
		})
	})

	// Smooth Scroll function
	const scrollTo = (selector, offset) => {
		let newPos = (offset) ? $(selector).offset().top - ($(window).height() / 2.6) : $(selector).offset().top;
		$('html, body').animate({
			scrollTop: newPos
		}, 1000, 'easeOutCubic');
	}


});

