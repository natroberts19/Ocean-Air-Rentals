 // Create a variable to capture the beach requested.
 var weatherBeach;

 // Create a click event for all buttons included in the list of beaches.
 $(".beach-btn").on("click", function() {
     
     // Identify and capture the specific beach value that was clicked.
     weatherBeach = $(this).attr("value");
     console.log("Clicked Beach: ", weatherBeach);
 
     // Now we GET the weather data from the weather-js backend package.
     // The value of the searchedBeach is then inserted in the GET request at the end of the URL to replace :City/:State. 
     $.get("api/weather/" + weatherBeach, function(data) {
         console.log("Weather for clicked beach button: ", data);
         // Now append the current weather onto the weather div or display the else message.
         if (data) {
             $("#weather").html("<b>Current Weather for:</b> <br>" + data[0].location.name + "<br>");
             $("#weather").append(" " + data[0].current.temperature + " " + data[0].location.degreetype + ", " +
             data[0].current.skytext);
            
         }
         else {
             $("#weather").text("Sorry, the weather data is not available at this time.");
         }
     });
 });