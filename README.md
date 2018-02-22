# Ocean Air Rentals (OAR)
________________________________________________________________________________________________________________________

## Business Description:

Ocean Air Rentals allows people visiting Florida to rent beach equipment for their stay at one of 14 beaches. Our business will have locations at each of the beaches listed with equipment for rent by anyone who desires it. Reservations can be made online using the Ocean Air Rentals reservation application.

The business model and application is designed to be used as a single business venture, or can be distributed to business-owners who would like to utilize the app to manage their own beach equipment rental business.

## Reservation Application (UI):

The OAR user interface is a single-page, full stack web application to allow users to reserve beach equipment. The UI takes in a reservation through form inputs and sends the information to a back-end mySQL database for persistent storage. The back-end then sends a confirmation message to the user via the Twilio messaging npm.

Users can also interact with the UI to locate specific beach information that includes the current weather forecast at the beach selected and equipment pick-up information using the Google Places-Maps API.

## Manager Portal Application:

This application also includes a Manager Portal page that provides an OAR manager with visibility to back-end database information to view, edit, delete reservations and to manage inventory levels.

________________________________________________________________________________________________________________________

## Design Specs and Technologies:

### Responsive UI and Portal:

Our fully mobile-responsive UI was achieved using a Glint professional, no-cost template designed for small businesses. Designed by Colorlib, the template includes parallax effects and scroll animation for a smooth and clean user experience. The Manager Portal page is designed using Bootstrap responsive elements including layout, forms, table, and buttons.

### Back-end Server and Routing:

* Our back-end server is designed using **Node** and **Express.js** web server.
* The server is backed by a **MySQL database** that utilizes **Sequelize** ORM's. The oar_database includes a reservations and an inventory table to persistently store user and manager data. Sequelize is used to create the table structure and to develop the GET and POST routing queries we use to pass information between back and front-ends. 
* Our application is live-hosted on the **Heroku** web service and includes a **MySQL JAWS DB**.

### API and NPM Packages:

* The **Twilio npm** is a SMS messaging package that generates a POST route to capture a phone number from the reservation form and then sends the user a text message confirming their reservations. The technology does allow for two-way communication, for example, if a user needs to cancel or change a reservation.
* The **weather-js npm** package uses a GET route to generate back-end weather data and a GET route to display it based on the beach that the user clicks on the front-end.
* The **Google Places** api makes a front-end call to display a centered map of the beach region, using Latitude and Longitude coordinates. The map includes a marker for the specific pick-up location of OAR. When the marker is clicked, a pop-up info window appears with more information about the OAR pick-up location. The Google Places location is determined by a unique Places id that matches the beach the user clicked on the front-end UI.

### Additional Technologies:

* Selected test scripts were written using **mocha** and **chai** npm packages.
* Our middle-ware functionality is achieved through **body-parser** npm.

________________________________________________________________________________________________________________________

## See our App: 

### Reservation UI: (https://calm-mountain-36621.herokuapp.com)

### Manager Portal: (https://calm-mountain-36621.herokuapp.com/manager)