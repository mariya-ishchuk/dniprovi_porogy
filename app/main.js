// MASONRY

document.addEventListener("DOMContentLoaded", function(event) { 
		var elem = document.querySelector('.grid');
		var msnry = new Masonry( elem, {
				// options
				itemSelector: '.grid-item',
				columnWidth: 263,
				gutter: 30,
				fitWidth: true
		});


		//title carousel functionality_____________________________________
		var currentIndex = 0;
		var carouselTimer, carouselInterval;

		$('.jcarousel')
			.jcarousel({wrap: "circular"})
			.jcarouselAutoscroll({
					interval: 3000,
					target: '+=1',
					autostart: true
			});

		$('#carousel').mouseover(function() {
			$('.jcarousel').jcarouselAutoscroll("stop");
		});

		$('#carousel').mouseout(function() {
			$('.jcarousel').jcarouselAutoscroll("start");
		});

		$('.next-carousel-button').click(function(){
				$('.jcarousel').jcarousel('scroll', "+=1");
		});

		$('.prev-carousel-button').click(function(){
				$('.jcarousel').jcarousel('scroll', "-=1");
		});
		//_____________________________________________________________________

		// articles carousel___________________________________________________
		$('.jcarousel-articles')
			.jcarousel({wrap: "circular"})
			.jcarouselAutoscroll({
					interval: 3000,
					target: '+=1',
					autostart: true
			});
		 //____________________________________________________________________
});

var head = document.getElementsByTagName('head')[0];

// Save the original method
var insertBefore = head.insertBefore;

// Replace it!
head.insertBefore = function (newElement, referenceElement) {

    if (newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {

        console.info('Prevented Roboto from loading!');
        return;
    }

    insertBefore.call(head, newElement, referenceElement);
};

// MAP
function initMap() {
	var kromleh = {lat: 48.197066, lng:35.177004};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: kromleh,
		disableDefaultUI: true,
		scrollwheel:  false,
	});
};

var openMap = document.getElementById('open-map');
var parkMap = document.getElementById('parkmap');
var captionLogo = document.getElementsByClassName('caption-logo3')[0];
var parkmapP = document.getElementById('parkmap-p');
var mapContainer = document.getElementsByClassName('map-container')[0];
var grey = document.getElementsByClassName('grey')[0];
var map = document.getElementById('map');
var closeMap = document.getElementById('close-map');

closeMap.style.display = 'none';

openMap.onclick = function resizeMap() {
		parkMap.style.height = '100vh';
		parkMap.style.width = '100%';
		captionLogo.style.display = 'none';
		parkmapP.style.display = 'none';
		mapContainer.style.height = '100%';
		mapContainer.style.width = '100%';
		grey.style.display = 'none';
		openMap.style.display = 'none';
		google.maps.event.trigger(map, "resize");
		closeMap.style.display = 'block';
};

closeMap.onclick = function resizeMap() {
		parkMap.style.height = '600px';
		parkMap.style.width = '100%';
		captionLogo.style.display = 'flex';
		parkmapP.style.display = 'flex';
		mapContainer.style.height = '234px';
		mapContainer.style.width = '100%';
		grey.style.display = 'block';
		openMap.style.display = 'block';
		google.maps.event.trigger(map, "resize");
		closeMap.style.display = 'none';
};
