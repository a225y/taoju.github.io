// JavaScript Document
$(window).load(function(){
	$('.preloader').fadeOut(1000);
	});

// wow
  new WOW({ mobile: false }).init();
  
// parallax
function initParallax(){
	$('#home').parallax("100%",0.3);
	$('#brands').parallax("100%",0.5);
	
	}
	initParallax();

//carousel
$('.#carousel').carousel({
  interval: 2000
});	
	

//nivo lightbox
$(function(){
	$('#taoju-img a').nivoLightbox({
		effect: 'fadeScale',
		});
	});