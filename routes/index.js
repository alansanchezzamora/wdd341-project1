const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hi WORLD");
});



router.use("/users", require("./users"));


module.exports = router;
