"use strict";

const express = require("express");
const { getData } = require("./controllers");
const router = require("./router");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3011;

app.use(express.json());

app.use(router);

app.get("/data", getData);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
