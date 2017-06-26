$(document).ready(function () {

	$('.js-screen-sld').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="screen__sld-arrow screen__sld-arrow--prev" type="button"><svg class="icon icon-arrow-sld"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-sld"></use></svg></button>',
		nextArrow: '<button class="screen__sld-arrow screen__sld-arrow--next" type="button"><svg class="icon icon-arrow-sld"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-sld"></use></svg></button>'
	});

	$('.js-product-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="product__arrow product__arrow--prev" type="button"><svg class="icon icon-arrow-sld"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-sld"></use></svg></button>',
		nextArrow: '<button class="product__arrow product__arrow--next" type="button"><svg class="icon icon-arrow-sld"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-sld"></use></svg></button>'
	});

	$('.js-product-vertical').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: false,
		prevArrow: '<button class="product__arrow product__arrow--prev" type="button"><svg class="icon icon-arrow-sld"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-sld"></use></svg></button>',
		nextArrow: '<button class="product__arrow product__arrow--next" type="button"><svg class="icon icon-arrow-sld"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-sld"></use></svg></button>',
		vertical: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					vertical: false,
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					vertical: false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 424,
				settings: {
					vertical: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.js-news-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<button class="read__arrow read__arrow--prev" type="button"><svg class="icon icon-arrow-sld"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-sld"></use></svg></button>',
		nextArrow: '<button class="read__arrow read__arrow--next" type="button"><svg class="icon icon-arrow-sld"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-sld"></use></svg></button>',
		vertical: true,
		draggable: false,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

  $('.js-review-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.js-review-slider-thumbs'
  });

  $('.js-review-slider-thumbs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js-review-slider',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
  });

});