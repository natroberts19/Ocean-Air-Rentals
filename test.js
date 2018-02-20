var expect = require("chai").expect;
var axios = require("axios");
var main = require("./public/javascript/main.js");
var testFunction = function (event) {
    

    var newReservation = {
        reservationName: ("Gabe"),
        reservationEmail: ("gvermund@aol.com"),
        reservationPhone: ("2055662453"),
        reservationBeach: ("Cocoa"),
        reservationItem: ("Chairs and Umbrella"),
        reservationDate: ("02-18-2018")
    };

    

    // submitReservation(newReservation);
    
    // function submitReservation(newReservation) {
        axios.post("/api/reservation", newReservation, function(result) {
            console.log(result);
        });
    
    //   }
    
};
describe("testFunction", function(){
    it("should make a new reservation based on user input", function(){
        expect(testFunction).to.exist(newReservation);
    });
});