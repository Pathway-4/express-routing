"use strict";

async function getData(req, res) {
  const response = await fetch("http://localhost:3010/data");
  const data = await response.json();
  res.send(data);
}

module.exports = { getData };
