document.addEventListener("DOMContentLoaded", function(event) { 

	$('.jcarousel')
		.jcarousel({wrap: "circular"});

	$('.next-carousel-button').click(function(){
		$('.jcarousel').jcarousel('scroll', "+=1");
	});

	$('.prev-carousel-button').click(function(){
		$('.jcarousel').jcarousel('scroll', "-=1");
	});

	$(".carousel-close").click(function(){
		$('.carousel').removeClass("visible");
	});

	$(".carousel-fullscreen").click(function(){
		$('.carousel').addClass("full-screen");
	});

	document.getElementsByClassName("gallery-section-wrapper")[0].onclick = function(event) {
		if (event.target.parentNode.classList.contains("gallery-item")) {
			//title carousel functionality_____________________________________

			showGalery(event.target.parentNode.dataset.index);
			//_____________________________________________________________________
			
		}
	}
});

function showGalery(currentIndex) {
	$('.jcarousel').jcarousel("scroll", currentIndex, false, function() {
		$('.carousel').addClass("visible");
	});
}