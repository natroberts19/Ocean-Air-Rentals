// This file just includes the pulling of frontend data!

// Google Places API:
function initMap() {
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

  // Create the function initMap for the callback referred to in the maps script tag.
// function initMap() {
// Set up the view options for the map. Zoom level and centered location. In this case, the City of Daytona Beach.
    // var options = {
    //     zoom: 10,
    //     center: {lat: 29.2108, lng: -81.0228}
    // }
// This now creates the map based on the options in the object above.
    // var map = new google.maps.Map(document.getElementById('map'), options);

// Adds a marker for a location on the map. In this case, Daytona Beach Boardwalk.
    // var marker = new google.maps.Marker({
    //     position: {lat: 29.2330, lng: -81.0100},
    //     map: map,
    //     icon: "http://www.gstatic.com/mapspro/images/stock/1355-rec-beach.png"
    // });
// Adds a pop-up window onto the marker.
    // var infoWindow = new google.maps.InfoWindow({
    //     // Add content here and can add html tags.
    //     content: "<h3>Daytona Beach, FL</h3><p>Enjoy some fun in the sun and be sure to pick up your beach equipment at Ocean Air Rentals!</p>"
    // });
// Now add a "listener" function to listen for when a user clicks the marker.
//     marker.addListener('click', function(){
//         infoWindow.open(map, marker);
//     });

// }
