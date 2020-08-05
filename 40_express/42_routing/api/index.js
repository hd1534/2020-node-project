const express = require("express");
const router = express.Router();

router.use("/music", require("./music/music"));
router.use("/movie", require("./movie/movie"));

module.exports = router;