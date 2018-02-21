# OceanAirRentals
Full stack application to allow users to rent beach equipment.

This app will allow people visiting Florida to rent beach equipment for their stay at any of 14 beaches.
Our business will have locations at each of the 14 beaches listed with equipment for rent by anyone who desires it. It can be done in person or online or on the phone. 
We achieve this task by creating a database using **SQL**. **Sequelize** allows us to create tables to show us inventory and whether what the user wants is in fact available. SQL allows us to collect data from users such as name, e-mail, and phone number.
We use **Twilio** to capture people's phone numbers and send them text messages confirming their reservations.
We also offer weather information using the **weather-js** package.
Our testing was done using **mocha** and **chai**.
We use **express-handlebars** to be able to use handlebars and **express** to create our routers.
Our middle-ware functionality is achieved through **body-parser**.