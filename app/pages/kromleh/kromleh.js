function initKromlehMap() {
	var mykilske = {lat: 48.204151, lng:35.173128};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: mykilske,
		mapTypeId: 'satellite',
		// disableDefaultUI: true,
		scrollwheel:  false,
	});
	var marker = new google.maps.Marker({
		position: mykilske,
		map: map
	});
};