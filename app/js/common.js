document.addEventListener("DOMContentLoaded", function () {


	new WOW().init();

	var rellax = new Rellax('.rellax');

	$('.header__burger').click(function(){
		$('body').toggleClass('active')
	})

	$('.js-scroll').click(function(){
		$('body').removeClass('active')
	})


	

		$('.services__wrapper-hide').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1000,
			variableWidth: true,
			accessibility: false,
		  });

		$('.hero__slider-wrapper').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1000,
			variableWidth: true,
			accessibility: false,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
					centerMode: false,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					centerMode: false,
					centerPadding: '40px',
					slidesToShow: 1,
				  }
				}
			  ]
		});


		// $('.stories__wrapper').slick({
		// 	rtl: true,
		// 	infinite: false,
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	variableWidth: true,
		// 	speed: 1000,
		// 	accessibility: false,
		// 	swipe: false,
		// });




	// loader
	setTimeout(function () {
		document.querySelector('body').classList.remove('loaded');
	}, 400);


	const mainPageVideo = document.querySelector(".video__block")
if (mainPageVideo) {
	const playerPlay = document.querySelector('#playVideo');
	playerPlay.addEventListener("click", () => {
		$('.video__abs-1').hide()
		$('.video__abs-2').hide()
		$('.video__abs-3').hide()
		const player = document.querySelector('#mainVideo');
		let data = { method: "play" };
		player.contentWindow.postMessage(JSON.stringify(data), "*");
		mainPageVideo.classList.add("activeVideo")
	})
}


	let slides = $(".hero__slider-item:last-child").index();
	$('.hero__pages-total').html("0" + (slides + 1));
	
	let slidesStories = $(".swiper-slide:last-child").index();
	$('.stories__pages-total').html((slidesStories +1));

	let slidesServices = $(".services__item:last-child").index();
	$('.services__pages-total').html("0" + (slidesServices +1));

	$('.hero__title').hide();
	$('.hero__desc').hide();
	$('.hero__title').eq(0).show();
	$('.hero__desc').eq(0).show();

	$('.slick-next, .slick-prev').click(function(){

		let slide = $("div.slick-current").index() + 1;
		$('.hero__pages-span').html("0" + slide)
		$('.hero__title').eq(slide).hide()
		$('.hero__desc').eq(slide).hide()
		$('.hero__title').eq(slide - 2).hide()
		$('.hero__desc').eq(slide - 2).hide()
		$('.hero__title').eq(slide - 1).show()
		$('.hero__desc').eq(slide - 1).show()
	})

	
	
	$('.hero__slider-wrapper').on('swipe', function(){
		let slide = $("div.slick-current").index() + 1;
		$('.hero__pages-span').html("0" + slide)
		$('.hero__title').hide()
		$('.hero__desc').hide()
		$('.hero__title').eq(slide - 1).show()
		$('.hero__desc').eq(slide - 1).show()
	  });

	  



	$('.swiper-button-prev, .swiper-button-next').click(function(){

		let slide = $(".swiper-slide-active").index() + 1;
		$('.stories__pages-span').html("0" + slide)
		
	})
	


	$('.services__wrapper-hide .slick-next, .services__wrapper-hide .slick-prev').click(function(){

		let slide = $(".services__item.slick-current").index() + 1;
		$('.services__pages-span').html("0" + slide)
		
	})
	
	$('.services__wrapper-hide').on('swipe', function(){
		let slide = $(".services__item.slick-current").index() + 1;
		$('.services__pages-span').html("0" + slide)
	  });
	

	  $(".stories__story-item-title").lettering('lines');
	  $(".stories__story-item-title span").lettering('words');
	  $(".stories__story-item-label").lettering('lines');
	  $(".stories__story-item-label span").lettering('words');
	  $(".stories__story-item-desc").lettering('lines');
	  $(".stories__story-item-desc span").lettering('words');
	  $(".stories__story-item-desc-hidden").lettering('lines');
	  $(".stories__story-item-desc-hidden span").lettering('words');

	  swiper.on('slideChange', function () {
			let number = $('.swiper-pagination-current').html()
			$('.stories__story-item').hide();
			$('.stories__story-item').eq(number-1).show()
	  });
	  swiper.on('click', function () {
			let number = $('.swiper-pagination-current').html()
			$('.stories__story-item').hide();
			$('.stories__story-item').eq(number-1).show()
	  });


	 



	
	


	// lazy load
	// setTimeout(function () {
	// 	$(".js-bg").each(function () {
	// 		$(this).css('background-image', 'url(' + $(this).data("bg") + ')');
	// 	});
	// 	$(".js-img").each(function () {
	// 		$(this).attr('src', $(this).data("src"));
	// 	});
	// }, 200);



	/* components */

	/*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	*/

	/* components */

	//prevent drag img and a
	const imagesAndLinks = document.querySelectorAll('img, a');
	if (imagesAndLinks) {
    imagesAndLinks.forEach(function (item, i, arr) {
			item.addEventListener('dragstart', function (e) {
				e.preventDefault();
			})
    });
  }

	
	const handlerResize = function () {
		let viewport_wid = viewport().width;
		let viewport_height = viewport().height;

		// if (viewport_wid <= 991) {
			
		// }
	}

	window.addEventListener('load', handlerResize);
	window.addEventListener('resize', handlerResize);

	// js-scroll
(function () {

	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector('.header').clientHeight;
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;

		const ease = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};

		const animation = function (currentTime) {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};
		requestAnimationFrame(animation);

	};

	const scrollTo = function () {
		const links = document.querySelectorAll('.js-scroll');
		links.forEach(each => {
			each.addEventListener('click', function () {
				const currentTarget = this.getAttribute('href');
				smoothScroll(currentTarget, 1000);
			});
		});
	};
	scrollTo();
}());


});

/* viewport width */
function viewport() {
	let e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */




const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 5,
	centeredSlides: true,
	pagination: {
	  el: '.swiper-pagination',
	  type: 'fraction',
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	spaceBetween: 20,
	speed: 1000,
  });
