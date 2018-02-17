// This file will include functionality to receive table data to display on the manager.html page.

$("#showReservations").on("click", function (event) {
    event.preventDefault();
    $.get("/api/manager", function () {
        //code??
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
    $.post("/api/manager", newInventory, function() {});
});