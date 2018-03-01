function initMap() {
	// add your code here

	var ucsd_ltlng = {lat:32.879083, lng:-117.235912};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}