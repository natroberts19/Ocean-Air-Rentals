var GoogleMapsLoader = require('google-maps'); // only for common js environments 
 
GoogleMapsLoader.load(function(google) {
    new google.maps.Map(el, options);
});
GoogleMapsLoader.KEY= "AIzaSyBvG-9VfsYrh5zHhx_GPPHDjUPnA5Xh0QE";