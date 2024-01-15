// Ensure the DOM is fully loaded
$(document).ready(function () {
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
