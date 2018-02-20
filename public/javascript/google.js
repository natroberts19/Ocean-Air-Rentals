// This file holds the frontend javascript for Google Places beach data.

// Create an array of beach objects to store the google unique info.
var googleBeach = [{
  value: "cocoa beach/fl",
  center: {
    lat: 28.3200,
    lng: -80.6076
  },
  placeId: 'ChIJ0wYVXRYd3ogR-Rwiu-rQx4M'
},
{
  value: "daytona beach/fl",
  center: {
    lat: 29.2108,
    lng: -81.0228
  },
  placeId: 'ChIJg1YCJZTb5ogR6yrLHbc7ajY'
},
{
  value: "destin beach/fl",
  center: {
    lat: 30.393534,
    lng: -86.495781
  },
  placeId: 'ChIJl-HdaWdbkYgRS_MyeWqCW8o'
},
{
  value: "miami beach/fl",
  center: {
    lat: 25.7907,
    lng: -80.1300
  },
  placeId: 'ChIJiyKQ9Zq02YgRM64tK-BXkUc'
},
{
  value: "new smyrna beach/fl",
  center: {
    lat: 29.0258,
    lng: -80.9270
  },
  placeId: 'ChIJGT0FgeAr54gRMxTOL4wgyhE'
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
  value: "pensacola beach/fl",
  center: {
    lat: 30.3328,
    lng: -87.1498
  },
  placeId: 'ChIJ86kIPeDFkIgRdsrbssu0Jwk'
},
{
  value: "sanibel island/fl",
  center: {
    lat: 26.4490,
    lng: -82.0223
  },
  placeId: 'ChIJEdM-l44524gRcfok9CsOPE4'
},
{
  value: "siesta key/fl",
  center: {
    lat: 27.2670,
    lng: -82.5463
  },
  placeId: 'ChIJY6CpUP1Bw4gRcyov3c3taVk'
},
{
  value: "st augustine beach/fl",
  center: {
    lat: 29.8440,
    lng: -81.2712
  },
  placeId: 'ChIJZTPp9cKd5ogRFUePxEYAjfM'
},
{
  value: "st george island/fl",
  center: {
    lat: 29.6585,
    lng: -84.8802
  },
  placeId: 'ChIJj-TRbtw164gRu7jJStZbYnM'
},
{
  value: "st pete beach/fl",
  center: {
    lat: 27.7428,
    lng: -82.7505
  },
  placeId: 'ChIJK7ZF9rECw4gRjho9s1NRAtg'
},
{
  value: "vero beach/fl",
  center: {
    lat: 27.6386,
    lng: -80.3973
  },
  placeId: 'ChIJkV1OpdlY3ogRoiOXjp47pIc'
},
]

// Capture and identify the specific beach value that was clicked.
$(".beach-btn").on("click", function () {

googleBeachClicked = $(this).attr("value");
console.log("Clicked Beach Button: ", googleBeachClicked);

// Now loop through the googleBeach array.
// If googleBeachClicked is equal to googleBeach value, then run function initMap().
// ________________________________________________________________________________

for (var i = 0; i < googleBeach.length; i++) {
  console.log("Give me all the Beach values: ", googleBeach[i].value);
  if (googleBeach[i].value === googleBeachClicked) {
    initMap();
  } else {
    $("#map").text("Sorry, the beach data is not available at this time.");
  }
}

// ___________________________________________________________________________________

// Google Places API:
// Following is the initMap for the callback referred to in the maps script tag in the index.html file.
function initMap() {
  // Set up the view options for the map. Zoom level and centered location. Centered location is the lat/long value from the googleBeach array.  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: googleBeach.center,
    zoom: 10
  });
  // This now creates the map based on the options in the map object above.

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);


  service.getDetails({
    // placeId is included in the googleBeach array.
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
          'Rating: ' + place.rating + '<br> Website: ' + place.website + '<br> Address: ' +
          place.formatted_address + '</div>');
        infowindow.open(map, this);
      });

    }
  });
}
})