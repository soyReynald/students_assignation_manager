const router = require("express").Router();

router.get("/api", (req, res) => {
  res.send("Let's build a CRUD API!");
});


module.exports = router;