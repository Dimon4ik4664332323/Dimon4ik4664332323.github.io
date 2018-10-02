var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

 
 

 

//Adaptive mobile menu
function window_option() {
	var widthDoc = $(window).width(),
			heightDoc = $(window).height();

	if (widthDoc >= heightDoc) {
		$('.navigation').css('overflow', 'scroll');
	}	else {
		$('.navigation').css('overflow', 'initial');
	}
}

$(document).ready(function() {
	 

	//Adaptive mobile menu
	if (isMobile.any()) {
		window_option();

		$(window).resize(function() {
			window_option();
		});
	}
	
	//Phone mask
	$('[name="phone"]').inputmask({'mask': '+7 (999) 999-99-99'});

 

	//Modals
	$('.b-policy').on('click', function() {
		$('.p-policy').arcticmodal();
	});

	$('.zakaz').on('click', function(e) {
		e.preventDefault();
		objj = $(this).attr('rel');
		$('#obj').attr('value',objj);
		tov = $(this).attr('data-rel');
		$('#tovar').attr('value',tov);
		$('.f-form').arcticmodal();
	});

	//Responsive Tabs
	$('.accordion').responsiveTabs({
		startCollapsed: 'accordion'
	});
	
	

	$('[data-catalog-tab]').on('click', function() {
		var tab = $(this).data('catalog-tab');

		$('.accordion__tab').css('display', 'none').removeClass('r-tabs-state-active').addClass('r-tabs-state-default');
		$(tab).css('display', 'block').removeClass('r-tabs-state-default').addClass('r-tabs-state-active');

		$('.accordion__menu').removeClass('r-tabs-state-active').addClass('r-tabs-state-default');
		$('.accordion__link[href="'+tab+'"]').parent('.accordion__menu').removeClass('r-tabs-state-default').addClass('r-tabs-state-active');
	});

	$('.accordion__menu').on('click', function() {
		var tab = $(this).find('.accordion__link').attr('href');

		$('.accordion__menu').removeClass('r-tabs-state-active').addClass('r-tabs-state-default');
		$(this).removeClass('r-tabs-state-default').addClass('r-tabs-state-active');

		$('.accordion__tab').css('display', 'none').removeClass('r-tabs-state-active').addClass('r-tabs-state-default');
		$(tab).css('display', 'block').removeClass('r-tabs-state-default').addClass('r-tabs-state-active');

	});

	//Navigation scroll
	$('a.scroll').on('click', function() {
		var scroll_el = $(this).attr('href'),
				doc_w = $(document).width(),
				heightHeader;

		if (doc_w >= 1080) {
			heightHeader = 60;
		} else {
			heightHeader = 39;
		}

		if ($(scroll_el).length != 0) {
			$('html, body').animate({scrollTop: $(scroll_el).offset().top - heightHeader}, 500);
		}

		return false;
	});

	//Mobile menu
	$('.header__button').on('click', function() {
		$('.navigation').addClass('navigation--active');
		$('.header__overlay').addClass('header__overlay--active');
		$('.body').css('overflow', 'hidden');
	});

	$('.navigation__close, .header__overlay, .navigation__item').on('click', function() {
		$('.navigation').removeClass('navigation--active');
		$('.header__overlay').removeClass('header__overlay--active');
		$('.body').css('overflow', 'inherit');
	});

});