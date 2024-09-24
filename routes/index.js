const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hi WORLD");
});

module.exports = router;
