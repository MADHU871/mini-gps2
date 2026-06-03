let map;
let marker;

async function loadLocation() {

    const response =
    await fetch("/location");

    const data =
    await response.json();

    const position = {
        lat: data.latitude,
        lng: data.longitude
    };

    if (!map) {

        map =
        new google.maps.Map(
            document.getElementById("map"),
            {
                zoom: 15,
                center: position
            }
        );

        marker =
        new google.maps.Marker({
            position: position,
            map: map
        });

    } else {

        marker.setPosition(position);

        map.setCenter(position);
    }
}

loadLocation();

setInterval(loadLocation, 5000);