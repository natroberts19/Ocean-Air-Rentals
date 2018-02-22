// Mocha Test:
// Loop through an array and locate a specific beach value, center, and placeId. This will test the structure of the array of objects containing Google Place information for each beach.
// https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
// -----------------------------------------------------------------------------------------------------------------

var assert = require('chai').assert;

describe('Search', function () {
    var testgoogleBeach = [{
            value: "cocoa beach/fl",
            center: {
                lat: 28.3200,
                lng: -80.6076
            },
            placeId: 'ChIJ0wYVXRYd3ogR-Rwiu-rQx4M'
        },
        {
            value: "daytona beach/fl",
            center: {
                lat: 29.2108,
                lng: -81.0228
            },
            placeId: 'ChIJg1YCJZTb5ogR6yrLHbc7ajY'
        },
        {
            value: "destin beach/fl",
            center: {
                lat: 30.393534,
                lng: -86.495781
            },
            placeId: 'ChIJl-HdaWdbkYgRS_MyeWqCW8o'
        }
    ];

    it('should return the object that matches the search', function () {
        var value1 = search(testgoogleBeach, 'cocoa beach/fl');
        var value2 = search(testgoogleBeach, 'daytona beach/fl');
        var value3 = search(testgoogleBeach, 'destin beach/fl');

        assert.equal(value1, testgoogleBeach[0]);
        assert.equal(value2, testgoogleBeach[1]);
        assert.equal(value3, testgoogleBeach[2]);

        var center1 = search(testgoogleBeach, {
            lat: 28.3200,
            lng: -80.6076
        }, 'center');
        var center2 = search(testgoogleBeach, {
            lat: 29.2108,
            lng: -81.0228
        }, 'center');
        var center3 = search(testgoogleBeach, {
            lat: 30.393534,
            lng: -86.495781
        }, 'center');

        assert.equal(center1, testgoogleBeach[0]);
        assert.equal(center2, testgoogleBeach[1]);
        assert.equal(center3, testgoogleBeach[2]);

        var placeId1 = search(testgoogleBeach, 'ChIJ0wYVXRYd3ogR-Rwiu-rQx4M');
        var placeId2 = search(testgoogleBeach, 'ChIJg1YCJZTb5ogR6yrLHbc7ajY');
        var placeId3 = search(testgoogleBeach, 'ChIJl-HdaWdbkYgRS_MyeWqCW8o');

        assert.equal(placeId1, testgoogleBeach[0]);
        assert.equal(placeId2, testgoogleBeach[1]);
        assert.equal(placeId3, testgoogleBeach[2]);
    });

    it('should return undefined because none of the objects in the array have that value', function () {
        var findNonExistingObj = search(testgoogleBeach, 'venice beach/fl');

        assert.equal(findNonExistingObj, undefined);
    });

    it('should return undefined becuase our array of objects does not have ids', function () {
        var findById = search(testgoogleBeach, 'cocoa beach/fl', 'id');

        assert.equal(findById, undefined);
    });
});