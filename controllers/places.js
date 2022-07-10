const router = require("express").Router();
const places = require("../models/place.js");
router.get("/", (req, res) => {
  res.render("places/index", { places });
});
router.get("/new", (req, res) => {
  res.render("places/new");
});
router.post("/", (req, res) => {
  res.send("POST /places");
});
module.exports = router;
