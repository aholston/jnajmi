$(document).ready(function() {

	// $('.dropdown').hide();
	// $('.hover').hover(function() {
	// 	$(.dropdown).show();
	// })

var width = 1000;
var animationSpeed = 2000;
var pause = 3000;
var currentSlide = 1;

var $slider = $('#slider');
var $slideContainer = $slider.find('.slides');
var $slides = $slideContainer.find('.slide');
var interval;

function startSlider() {
	interval = setInterval(function() {
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
			currentSlide++;
			if (currentSlide === $slides.length) {
				currentSlide = 1;
				 $slideContainer.css('margin-left', 0)
			}
		});

	}, pause);
}

startSlider();

function pauseSlider() {
	clearInterval(interval);
}
$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);


})
