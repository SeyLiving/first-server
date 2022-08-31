const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my server")
});

app.post("/", (req, res) => {
    res.status(201).send("Your data has been saved.");
});

app.put("/", (req, res) => {
    res.status(200).send("Your data has been replaced.");
});

app.patch("/", (req, res) => {
    res.status(200).send("Your data has been updated.");
});

app.delete("/", (req, res) => {
    res.status(200).send("Your data has been deleted.");
});

app.listen(4002, (err) => {
    console.log("🌍 Server listening on http://localhost 4002")
});