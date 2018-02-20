// Google Places API:
// Following is the initMap for the callback referred to in the maps script tag in the index.html file.
function initMap() {
  // Set up the view options for the map. Zoom level and centered location. Centered location is the lat/long value from the googleBeach array. Hard coded here.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: 27.7428,
        lng: -82.7505
      },
    zoom: 10
  });
  // This now creates the map based on the options in the map object above.

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);


  service.getDetails({
    // placeId is included in the googleBeach array. Hard coded here.
    placeId: 'ChIJK7ZF9rECw4gRjho9s1NRAtg'
  }, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      // Adds a marker for a location on the map. 
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: "http://www.gstatic.com/mapspro/images/stock/1355-rec-beach.png"
      });
      // Now add a "listener" function to listen for when a user clicks the marker.
      google.maps.event.addListener(marker, 'click', function () {
        // Adds a pop-up information window onto the marker.
        infowindow.setContent('<div>Ocean Air Rentals pick-up location: <br><strong>' + place.name + '</strong><br>' +
          'Rating: ' + place.rating + '<br> Website: ' + place.website + '<br> Address: ' +
          place.formatted_address + '</div>');
        infowindow.open(map, this);
      });

    }
  });
}
