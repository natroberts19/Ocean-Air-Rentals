// This file will include functionality to receive table data to display on the manager.html page.

$("#showReservations").on("click", function (event) {
    event.preventDefault();
    $.get("/api/manager", function (dbNewreservation) {
        //console.log(dbNewreservation);
        
        for (i = 0; i < dbNewreservation.length; i++) {
            // $("#allReservations").append(dbNewreservation[i].id);
            // $("#allReservations").append(dbNewreservation[i].name);
            // $("#allReservations").append(dbNewreservation[i].email);
            // $("#allReservations").append(dbNewreservation[i].phone);
            // $("#allReservations").append(dbNewreservation[i].beach);
            // $("#allReservations").append(dbNewreservation[i].rentalItem);
            // $("#allReservations").append(dbNewreservation[i].rentalDate);
            // $("#allReservtions").append("<tr><td>" + dbNewreservation[i].id + "</td><td>" + dbNewreservation[i].name + "</td><td>" +           
            // dbNewreservation[i].email + "</td><td>" + dbNewreservation[i].phone + "</td><td>" + dbNewreservation[i].rentalItem + "</td><td><button class='delRow' value='Delete'>Delete</button>");

            
            $("#reservation-table > thead").append("<tr><td>" + dbNewreservation[i].id + "</td><td>" + dbNewreservation[i].name + "</td><td>" +
            dbNewreservation[i].email + "</td><td>" + dbNewreservation[i].phone + "</td><td>" + dbNewreservation[i].beach + "</td><td>" + dbNewreservation[i].rentalItem + "</td><td>" + dbNewreservation[i].rentalDate + "</td><td><button class='editRow' value='edit'>Edit</button>" + "</td><td><button class='deleteRow' value=deleterow>Delete</button>" );         

        }
//$('#reservation-table').html(reservationData);

    });
});

$("#postInventory").on("click", function (event) {
    event.preventDefault();
    var newInventory = {
        beachName: $("#beachName").val(),
        rentalItem: $("#rentalItem").val(),
        price: $("#price").val(),
        rentable: $("#rentable").val()
    };
    console.log(newInventory);
    $.post("/api/manager", newInventory, function () {});
});