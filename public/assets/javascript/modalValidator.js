$(() => {

	// Close Modal Animation
	$('.contact-model-close').on('click', function () {
		closeModal();
	})

	$('.contact-button > button').on('click', function () {
		openModal();
	});


	$('#contact-model-form-submit').on('click', function (event) {
		event.preventDefault();
		// Finds data
		let name = $('#name').val();
		let email = $('#email').val();
		let message = $('#message').val();
		let emailIsValid = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{1,63}$/.test(email.toLowerCase());
		// Validator
		if (!name) { return animateMsg('Valid name is required', 'red') }
		else if (!email || !emailIsValid) { return animateMsg('Valid email is required', 'red') }
		else if (!message) { return animateMsg('Valid message is required', 'red') }
		// Everything checks out so send email
		else {
			$(this).addClass('disabled', 500);
			$(this).text('Sending...');
			animateMsg('Alright everything looks good!')
				.promise()
				.then(() => {
					animateMsg('Sending message now...')
						.promise()
						.then(() => {
							sendEmail(name, email, message);
						});
				})
		}
	})

	const sendEmail = (name, email, message) => {
		let mailData = {
			name: name,
			email: email,
			message: message
		};

		$.ajax({
			type: 'POST',
			url: '/api/email',
			data: mailData
		}).then((result, err) => {
			if (result.status !== 200) {
				console.log(err);
				animateMsg('Error sending message...', 'red')
					.promise()
					.then(() => {
						animateMsg('Email directly at themai@maicoding.me', 'red')
							.promise()
							.then(() => {
								closeModal()
								$('#contact-model-form-submit').removeClass('disabled');
								$('#contact-model-form-submit').text('Send Message');
							});
					})
			}
			else {
				animateMsg('Mail Successfully Sent!', 'white')
					.promise()
					.then(() => {
						closeModal()
						$('#contact-model-form-submit').removeClass('disabled');
						$('#contact-model-form-submit').text('Send Message');
					})
			};
		})
	}

	const closeModal = () => {
		$.scrollLock(false);
		$('.contact-modal').finish();
		$('.invisible-expand').finish();
		$('.contact-button > button').finish();
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
	}

	let modalAnimated = false;
	let initContactBtnWidth = $('.contact-button > button').outerWidth();
	const openModal = () => {
		$('.contact-modal').finish();
		$('.invisible-expand').finish();
		$('.contact-button > button').finish();
		if (modalAnimated === false) {
			// Set to true to precent mutliple animations
			modalAnimated = true;
			// Locks scrolling
			$.scrollLock(true);
			// Animates button
			$('.contact-button > button').animate({
				'width': $('.contact-button > button').outerHeight(),
				'height': $('.contact-button > button').outerHeight(),
				'color': 'transparent',
				'font-size': '0px',
				'border-radius': '2rem',
			}, 1000, 'easeOutElastic', () => {
				$.scrollLock(false);
				let position = $('.contact-button > button').offset();
				$('.invisible-expand').css({
					'top': position.top + ($('.contact-button > button').outerHeight() / 2),
					'left': position.left + ($('.contact-button > button').outerWidth() / 2)
				})
				$.scrollLock(true);
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
	}

	const animateMsg = (text, color) => {
		const $valid = $('.validation-text');
		$valid.finish();
		$valid.text(text);
		$valid.css({ color: (color) ? color : 'white' }).promise();
		$valid.animate({
			opacity: 1
		}, 200, () => {
			$valid.delay(1500).animate({
				opacity: 0
			}, 200);
		})
		return $valid;
	}
})