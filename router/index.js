"use strict";

const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/about", (req, res) => {
  res.send("About");
});

router.get("/data", (req, res) => {
  res.sendFile(path.join(__dirname, "../data.json"));
});

router.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const data = require("../data.json");
  const user = data.find((user) => user.id === parseInt(id));
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send({ name: user.name, email: user.email });
  }
});

router.route("/users");

router.route("/users/:id");

router.route("/users");

module.exports = router;
