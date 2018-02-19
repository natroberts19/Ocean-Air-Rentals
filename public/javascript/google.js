// This file just the frontend javascript for Google Places beach data

// Create an array of beach objects to store the google unique info.
var googleBeach = [{
    value: "panama city beach/fl",
    center: {
      lat: 30.1766,
      lng: -85.8055
    },
    placeId: 'ChIJ4_4AqdeIk4gRLBt4puoszpc'
  },
  {
    value: "panama city beach/fl",
    center: {
      lat: 30.1766,
      lng: -85.8055
    },
    placeId: 'ChIJ4_4AqdeIk4gRLBt4puoszpc'
  },
  {
    value: "panama city beach/fl",
    center: {
      lat: 30.1766,
      lng: -85.8055
    },
    placeId: 'ChIJ4_4AqdeIk4gRLBt4puoszpc'
  },
]

$(".beach-btn").on("click", function () {

  // Identify and capture the specific beach value that was clicked.
  googleBeachClicked = $(this).attr("value");
  console.log("Clicked Beach: ", googleBeachClicked);
  // Now loop through the googleBeach array.
  // If clicked beach is equal to googleBeach value, then run function initMap.
  // ________________________________________________________________________________

  for (var i = 0; i < googleBeach.length; i++) {
    console.log("Give me the Beach values: ", googleBeach[i].value);
    if (googleBeach[i].value === googleBeachClicked) {
      initMap();
    } else {
      $("#map").text("Sorry, the beach data is not available at this time.");
    }
  }

  // ___________________________________________________________________________________

  // Google Places API:
  // Create the function initMap for the callback referred to in the maps script tag.
  function initMap() {
    // Set up the view options for the map. Zoom level and centered location. In this case, the City of Daytona Beach.  
    var map = new google.maps.Map(document.getElementById('map'), {
      center: googleBeach.center,
      zoom: 10
    });
    // This now creates the map based on the options in the object above.

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);


    service.getDetails({
      placeId: googleBeach.placeId
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
            'Rating: ' + place.rating + '<br> Website: <a href=' + place.website + '></a><br> Address: ' +
            place.formatted_address + '</div>');
          infowindow.open(map, this);
        });

      }
    });
  }
})