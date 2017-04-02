$(document).ready(function () {

	(function () {
		var menu = $('.js-menu'),
			menuBtn = $('.js-menu-btn');

		menuBtn.on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('is-active').next().slideToggle();
		});

		$(window).resize(function () {

			menuBtn.removeClass('is-active');
			if ($(window).width() <= 767) {
				menu.css('display', 'none');
			} else {
				menu.css('display', 'block');
			}
		});
	})();

	(function () {
		var sbBtn = $('.js-sb-item');
		sbBtn.on('click', function () {
			var _this = $(this);
			var sbContent = _this.children('.js-sb-content');

			_this.toggleClass('is-active');
			_this.children('.js-sb-content').slideToggle();

			sbContent.on('click', function (e) {
				e.stopPropagation();
			});
		});
		sbBtn.first().trigger('click');
	})();

	$('.js-scroll-next').on('click', function () {
		var scrollDistance = $(this).closest('section').next('section').offset().top;
		$('html, body').animate({scrollTop: scrollDistance}, 1000);
	});

	(function () {
		var offersRow = $('.js-offers-row'),
			offersItem = offersRow.children(),
			offersBtn = $('.js-more-offers');

		offersBtn.on('click', function (e) {
			e.preventDefault();

			$(this).children('span').text(!$(this).hasClass('is-active') ? 'Свернуть' : 'Еще предложения');
			$(this).toggleClass('is-active');

			offersItem.each(function () {
				if ($(this).hasClass('is-visible')) {
					$(this).fadeOut().removeClass('is-visible');
				}
				if ($(this).is(':hidden')) {
					$(this).fadeIn().css("display", "inline-block").addClass('is-visible');
				}
			});
		});
	})();

	// more text btn
	function moreText() {
		var moreBtn = $('.js-more-text');

		moreBtn.on('click', function (e) {
			e.preventDefault();
			$(this).prev().slideToggle();
			$(this).children('.about__more-text').text(!$(this).hasClass('is-active') ? 'Свернуть' : 'Развернуть');
			$(this).toggleClass('is-active');
		});
	};

	moreText();

	// open parts list
	(function () {
		var $partsList = $('.js-parts-list'),
			$partsToggle = $partsList.find('.parts__list-title'),
			$partsSublist = $partsToggle.next('.parts__sub-list'),
			$openAll = $('.js-parts-show'),
			$closeAll = $('.js-parts-hide');

		$openAll.on('click', function (e) {
			e.preventDefault();
			$partsToggle.addClass('is-active');
			$partsSublist.slideDown(200);
		});

		$closeAll.on('click', function (e) {
			e.preventDefault();
			$partsToggle.removeClass('is-active');
			$partsSublist.slideUp(200);
		});

		$partsToggle.on('click', function (e) {
			e.preventDefault();
			$(this).next($partsSublist).slideToggle(200);
			$(this).toggleClass('is-active');
		});

	})();

	// input number steps
	$('input[type="number"]').stepper();

	// custom select
	$('select').selectric();

});