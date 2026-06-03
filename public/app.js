async function loadVehicle() {

    const response =
        await fetch("/api/vehicle");

    const data =
        await response.json();

    document.getElementById("vehicle").innerText =
        data.vehicle;

    document.getElementById("status").innerText =
        data.status;

    document.getElementById("speed").innerText =
        data.speed;

    document.getElementById("fuel").innerText =
        data.fuel;

    document.getElementById("lat").innerText =
        data.latitude;

    document.getElementById("lng").innerText =
        data.longitude;
}

loadVehicle();