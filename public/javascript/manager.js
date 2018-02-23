// This file will include functionality to receive table data to display on the manager.html page.

// // Get inventory handlebars data
// $.get("/api/manager", function (dbNewinventory) {
//     console.log(dbNewinventory);

// });

//delete button onclick event + route for Reservation table
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

//update button onclick event + route
$(".editRow").on("click", function (event) {
    console.log("EDIT button clicked")

    //UPDATE DB CODE

});

$("#editBeach").on("click", function(event) {
    // do your modal stuff here
    var id = $(this).attr("data-id");
})


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

});

//revenue by date - manager
$("#revenueByDate").on("click", function (event) {
    event.preventDefault();
    console.log("searchdate button clicked")
    searchDate = $("#searchDate").val()
    console.log(searchDate);

    //get the db then sum where date = searchDate
    //jquery the sum to manager.html @ <div id="revenueByDateDiv"> 

});

//revenue total- manager
$("#totalSales").on("click", function (event) {
    event.preventDefault();
    console.log("total sales button clicked")


    //get the db then sum all the rows
    //jquery the sum to manager.html @ <div id="totalSalesDiv">

});