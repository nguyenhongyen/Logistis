;(function ($) {
	'use strict';

	$(window).scroll(function (){
		const scrollValue = $(window).scrollTop();
		const Body = $('body');
		const header = $('.header')

		if(scrollValue > 170){
			Body.addClass('is-scroll');

		}else{
			Body.removeClass('is-scroll');
		}
	})

	const scrollDown = function(){
		const textScroll = $('.text p').text();
		const textArr = textScroll.split('')
		$.each(textArr, function (i, char) {
			$('.text p').hide()
			$('.text').append(`<span style="transform: rotate(${i * 13}deg)">${char}</span>`);
		});
	}

	const scrollAboutUs = function(){
		const textScroll = $('.scroll__text p').text();
		const textArr = textScroll.split('')
		$.each(textArr, function (i, char) {
			$('.scroll__text p').hide()
			$('.scroll__text').append(`<span style="transform: rotate(${i * 14}deg)">${char}</span>`);
		});
	}

	const repeatTextOne = function(){
		const textRepeat = $('#repeat-text-one');
		const data = textRepeat.text()
		if(data.length){
			let resultRepeat = data.repeat(6)
			textRepeat.html(resultRepeat)
		}

	}
	const repeatTextTwo = function(){
		const textRepeat = $('#repeat-text-two');
		const data = textRepeat.text()
		if(data.length){
			let resultRepeat = data.repeat(6)
			textRepeat.html(resultRepeat)
		}

	}
	const repeatTextThree = function(){
		const textRepeat = $('#repeat-text-three');
		const data = textRepeat.text()
		if(data.length){
			let resultRepeat = data.repeat(6)
			textRepeat.html(resultRepeat)
		}

	}



	$(function () {
		scrollDown();
		scrollAboutUs();
		repeatTextOne();
		repeatTextTwo();
		repeatTextThree();

	})


})(jQuery);

