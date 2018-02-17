const axios = require("axios");

const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvG-9VfsYrh5zHhx_GPPHDjUPnA5Xh0QE&libraries=places&callback=initMap";

axios
  .get(url) 
  .then(response => {

    function initMap() {
      // Set up the view options for the map. Zoom level and centered location. In this case, the City of Daytona Beach.  
      var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 29.2108, lng: -81.0228},
          zoom: 10
        });
      // This now creates the map based on the options in the object above.
        
        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
    
        service.getDetails({
          placeId: 'ChIJhTfzuxba5ogRsv6qH_K19R0'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            // Adds a marker for a location on the map. In this case, Daytona Beach Boardwalk.
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              icon: "http://www.gstatic.com/mapspro/images/stock/1355-rec-beach.png"
            });
            // Now add a "listener" function to listen for when a user clicks the marker.
            google.maps.event.addListener(marker, 'click', function() {
            // Adds a pop-up information window onto the marker.
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Rating: ' + place.rating + '<br> Website: ' + place.website + '<br> Address: ' +
                place.formatted_address + '</div>');
              infowindow.open(map, this);
            });
          }
        });
      }
  })
  .catch(error => {
    console.log(error);
  });