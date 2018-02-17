// This route will set up the "get" that will display the Google Places and Weather.js data. (see pictures in Trello)

module.exports = function(app) {
// ** This is not set up correctly right now; just took mock up from whiteboard pic **
var data = {
    // Get the Places info that we want to include.
    beachname: function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 29.2108, lng: -81.0228},
        zoom: 10
      });
  
      var infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
  
      service.getDetails({
        placeId: 'ChIJhTfzuxba5ogRsv6qH_K19R0'
      }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: "http://www.gstatic.com/mapspro/images/stock/1355-rec-beach.png"
          });
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
              'Rating: ' + place.rating + '<br> Website: ' + place.website + '<br> Address: ' +
              place.formatted_address + '</div>');
            infowindow.open(map, this);
          });
        }
      });
    }
  
}

// Get route for Google and Weather
app.get("/api/beach/:name", function(req, res) {

  res.json(data);
})

}

