let map;
let marker;

function initMap(lat, lng) {

    map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 15,
            center: {
                lat: lat,
                lng: lng
            }
        }
    );

    marker = new google.maps.Marker({
        position: {
            lat: lat,
            lng: lng
        },
        map: map
    });
}