// Ensure the DOM is fully loaded
$(document).ready(function () {
    // Function to check API status and update the class of #api_status div
    function checkAPIStatus() {
        // Make an AJAX request to check the API status
        $.ajax({
            type: 'GET',
            url: 'http://0.0.0.0:5001/api/v1/status/',
            success: function (response) {
                // Check if the status is "OK"
                if (response.status === 'OK') {
                    // Add the class "available" to the #api_status div
                    $('#api_status').addClass('available');
                } else {
                    // Remove the class "available" from the #api_status div
                    $('#api_status').removeClass('available');
                }
            },
            error: function () {
                // Handle errors if needed
                console.error('Error in API status request');
            }
        });
    }

    // Check API status initially on script load
    checkAPIStatus();
    // object to store Amenity IDs and Name
    var amenityIdsNames = {};

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
        // Get Amenity ID and Name from data attributes
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');

        // Check if the checkbox is checked
        if ($(this).prop('checked')) {
            // Add Amenity ID and name to the object
            amenityIdsNames[amenityId] = amenityName;

        } else {
            // Remove Amenity ID and name from the object
            delete amenityIdsNames[amenityId];
        }

        // Update the h4 tag inside the div Amenities
        updateAmenitiesList();
    });

    // Function to update the h4 tag inside the div Amenities
    function updateAmenitiesList() {
        // Get the h4 tag inside the div Amenities
        var amenitiesHeader = $('.amenities h4');

        // Check if there are any Amenities checked
        if (Object.keys(amenityIdsNames).length > 0) {
            // Display the list of Amenities checked
            amenitiesHeader.text(Object.values(amenityIdsNames).join(', '));
        } else {
            // No Amenities checked, display a default message
            amenitiesHeader.text('None selected');
        }
    }

});