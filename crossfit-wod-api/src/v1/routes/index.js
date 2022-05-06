const express = require("express");
const router = express.Router();

// Inside there we spin up a simple router.

router.route("/").get((req, res) => {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;