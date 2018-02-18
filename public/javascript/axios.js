const axios = require("axios");
const key = "AIzaSyBvG-9VfsYrh5zHhx_GPPHDjUPnA5Xh0QE";
const place = "ChIJhTfzuxba5ogRsv6qH_K19R0";
const url = "https://maps.googleapis.com/maps/api/js";

axios
.get(url, {
  params: {
      key,
      place
  }
})
.then(response => {
  console.log(
    `Place: ${response.data.name} -\n`
    // `Location: ${response.data.results[0].geometry.location} -\n`,
    // `Rating: ${response.data.results[0].rating}`
  );
})
  
  .catch(error => {
    console.log(error);
});