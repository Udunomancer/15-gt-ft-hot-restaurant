// ===Require Express===
const express = require("express");
const path = require("path");

// ===Create instance of express===
const app = express();

// ===Create a port for the app to run===
let PORT = process.env.PORT || 3000;

// ===Add middleware===
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ===Arrays for Tables and Waitlist===
let tableArray = [{name: "table 1"}, {name: "table 2"}];
let waitlistArray = [{name: "table 3"}];

// ===HTML Routes===
// ---Home---
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views/home.html"));
})

// ---Reservations---
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "views/reservation.html"));
})

// ---Reserve---
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "views/tables.html"));
})

// ===API Routes===
// ---Get all table data---
app.get("/api/reservations", function(req, res) {
    const allReservations = tableArray.concat(waitlistArray);
    return res.json(allReservations);
})

// ---Create a table/reservation---
// app.post("/api/reserve", function(req, res) {
//     const newReservation = req.body;

// })

// ===Listen on the Port===
app.listen(PORT, function() {
    console.log("Listening on PORT" + PORT);
})