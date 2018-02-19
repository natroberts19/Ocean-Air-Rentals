// This file just includes the pulling of frontend data!

// Google Places API:
// Create the function initMap for the callback referred to in the maps script tag.
function initMap() {
  // Set up the view options for the map. Zoom level and centered location. In this case, the City of Daytona Beach.  
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.1766, lng: -85.8055},
      zoom: 10
    });
  // This now creates the map based on the options in the object above.
    
    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({
      placeId: 'ChIJ4_4AqdeIk4gRLBt4puoszpc'
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
          infowindow.setContent('<div>Ocean Air Rentals pick-up location: <br><strong>' + place.name + '</strong><br>' +
            'Rating: ' + place.rating + '<br> Website: '+ place.website +'<br> Address: ' +
            place.formatted_address + '</div>');
          infowindow.open(map, this);
        });
      }
    });
  }
