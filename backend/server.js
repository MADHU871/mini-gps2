const express = require('express');

const app = express();
const PORT = 3001;

// Initial GPS Location
let gpsData = {
    latitude: 17.3850,
    longitude: 78.4867,
    speed: 40,
    timestamp: new Date()
};

// API Endpoint
app.get('/gps', (req, res) => {
    res.json(gpsData);
});

// Home Route
app.get('/', (req, res) => {
    res.send('Mini GPS Tracking Backend Running 🚗');
});

// Simulate Vehicle Movement Every 5 Seconds
setInterval(() => {
    gpsData.latitude += 0.0001;
    gpsData.longitude += 0.0001;
    gpsData.timestamp = new Date();

    console.log('Updated GPS:', gpsData);
}, 5000);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});