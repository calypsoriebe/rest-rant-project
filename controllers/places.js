const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "jojos",
      city: "charlotte",
      state: "NC",
      food: "Chinese",
      pic: "/images/chineseFood.jpeg",
    },
    {
      name: "ichiban",
      city: "brooklyn",
      state: "NY",
      food: "ramen",
      pic: "/images/ramen.jpg",
    },
  ];
  res.render("places/index", { places });
});
module.exports = router;
