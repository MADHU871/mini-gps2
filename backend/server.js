const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Rollr Mini GPS Running Successfully");
});

app.get("/location", (req, res) => {
    res.json({
        vehicle: "Car-001",
        latitude: 16.239,
        longitude: 80.048
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});