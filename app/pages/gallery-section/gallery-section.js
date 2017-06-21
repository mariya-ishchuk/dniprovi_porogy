

// document.addEventListener("DOMContentLoaded", function(event) {

// 	initGalery(".gallery-section-wrapper", ".gallery-item");

// 	$('.next-carousel-button').click(function(){
// 		$('.jcarousel').jcarousel('scroll', "+=1");
// 	});

// 	$('.prev-carousel-button').click(function(){
// 		$('.jcarousel').jcarousel('scroll', "-=1");
// 	});

// 	$(".carousel-close").click(function(){
// 		$('.carousel').removeClass("visible");
// 		$('.carousel').removeClass("full-screen");
// 		!$('.carousel').hasClass("full-screen") && setCarouselSizes();
// 	});

// 	$(".carousel-fullscreen").click(function(){
// 		$('.carousel').toggleClass("full-screen");
// 		$('.jcarousel').jcarousel("reload");
// 	});

// 	document.getElementsByClassName("gallery-section-wrapper")[0].onclick = function(event) {
// 		if (event.target.parentNode.classList.contains("gallery-item")) {
// 			showGalery(event.target.parentNode.dataset.index);
// 		}
// 	}
// });

// function initGalery(containerToGrabItems, itemClass) {
// 	$.each($(containerToGrabItems + " " + itemClass), function(index, el) {
// 		$(".jcarousel-list").append($(el).clone().appendTo($("<li></li>")));
// 	});

// 	$('.jcarousel')
// 		.on('jcarousel:create jcarousel:reload', function() {
// 				var element = $(this),
// 						container = $(".carousel.full-screen");

// 				if (container.length) {
// 					setCarouselSizes(element, container.innerWidth());
// 				} else {
// 					setCarouselSizes(element);
// 				}
// 		})
// 		.jcarousel({wrap: "circular"});
// }

// function showGalery(currentIndex) {
// 	$('.jcarousel').jcarousel("scroll", currentIndex, false, function() {
// 		$('.carousel').addClass("visible");
// 	});
// }

// function setCarouselSizes(element, width) {
// 	var carousel = element || $(".jcarousel");
// 	$(".jcarousel, .carousel-container").css('width', (width || 600) + 'px');
// 	carousel.jcarousel('items').css('width', (width || 600) +'px');
// }