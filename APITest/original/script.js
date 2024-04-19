
function searchPhotos() {
    var locationInput = document.getElementById('location').value;

    // Check if the user entered a location
    if (locationInput) {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 25.787950805316022, lng: -80.19305614616177 },
           zoom: 15
        });

        var service = new google.maps.places.PlacesService(map);

        var request = {
            query: locationInput
        };

        service.textSearch(request, function (results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                var place = results[0];
                getPlaceDetailsAndDisplayPhotos(place.place_id);
            } else {
                alert('Location not found. Please enter a valid location.');
            }
        });
    } else {
        alert('Please enter a location.');
    }
}

function getPlaceDetailsAndDisplayPhotos(placeId) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 25.787950805316022, lng: -80.19305614616177 },
        zoom: 15
    });

    var service = new google.maps.places.PlacesService(map);

    var detailsRequest = {
        placeId: placeId
    };

    service.getDetails(detailsRequest, function (place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            displayPhotos(place);
        } else {
            alert('Failed to fetch place details. Please try again.');
        }
    });
}

function displayPhotos(place) {
    var photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = ''; // Clear existing photos

    if (place.photos && place.photos.length > 0) {
        place.photos.forEach(function (photo) {
            var imageUrl = photo.getUrl({ maxWidth: 500, maxHeight: 500 });

            // Create an image element and set its source attribute
            var imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = 'Location Photo';

            // Append the image element to the photo-container
            photoContainer.appendChild(imgElement);
        });
    } else {
        alert('No photos found for this location.');
    }
} 
/*function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 25.78847132455424, lng: -80.19342127536656 },
        zoom: 15
    });

    var service = new google.maps.places.PlacesService(map);

    var request = {
        placeId: 'ChIJEcHIDqKw2YgRZU-t3XHylv8'  //  place ID
    };

    service.getDetails(request, function (place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            // display photos
            place.photos.forEach(function (photo) {
                var imageUrl = photo.getUrl({ maxWidth: 500, maxHeight: 500 });

                // create an image element and set its source attribute
                var imgElement = document.createElement('img');
                imgElement.src = imageUrl;

                // append the image element to the photo-container
                document.getElementById('photo-container').appendChild(imgElement);
                
            });
        }
    });
}*/ 
