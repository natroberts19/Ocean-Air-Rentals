// Create the function initMap for the callback referred to in the maps script tag.
function initMap() {
// Set up the view options for the map. Soom level and centered location.
    var options = {
        zoom: 10,
        center: {lat: 29.2108, lng: -81.0228}
    }
// This now creates the map based on the options in the object above.
    var map = new google.maps.Map(document.getElementById('map'), options);

// Adds a marker for a location on the map.
    var marker = new google.maps.Marker({
        position: {lat: 29.2330, lng: -81.0100},
        map: map,
        icon: "http://www.gstatic.com/mapspro/images/stock/1355-rec-beach.png"
    });
// Adds a pop-up window onto the marker.
    var infoWindow = new google.maps.InfoWindow({
        // Add content here and can add html tags.
        content: "<h3>Daytona Beach, FL</h3><p>Enjoy some fun in the sun and be sure to pick up your beach equipment at Ocean Air Rentals!</p>"
    });
// Now add a "listener" function to listen for when a user clicks the marker.
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });

}
