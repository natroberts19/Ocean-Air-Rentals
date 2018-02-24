// This file will include functionality to receive table data to display on the manager.handlebars view.

//Delete button onclick event + route for Reservation table.
$(".deleteRow").on("click", function (event) {

    var id = $(this).attr("data-id");
    console.log(`DELETE button clicked for ${id}`);
    $.ajax({
            method: "DELETE",
            url: "/api/manager/" + id
        })
        .then(function () {
            console.log("reservation deleted");
            //not sure what goes here.
            location.reload();
        });

});

// Add inventory item button onclick event + route for the Inventory table.
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

    $('#beachName').val('');
    $('#rentalItem').val('');
    $('#price').val('');
    $('#rentable').val('');

    location.reload();
});

// Update button onclick event + route
$(".editRow").on("click", function (event) {
    console.log("EDIT button clicked")
    
    //UPDATE DB CODE
});

$("#editBeach").on("click", function (event) {
    // Do  modal stuff here
    var id = $(this).attr("data-id");
})
