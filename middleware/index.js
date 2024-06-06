"use strict";

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  res.status(500).send("Internal Server Error");
  next();
});

module.exports = app;
