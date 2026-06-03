const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Rollr Mini Smart Car Platform Running");
});

app.get("/api/vehicle", (req, res) => {
    res.json({
        vehicle: "Car-001",
        speed: 65,
        fuel: 80
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});