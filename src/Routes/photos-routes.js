const router = require("express").Router();
const path = require("path");

router.get("/Nopfp", async (req, res) => {
    res.sendFile(path.join(__dirname, "../Images/nopfp.png"))
});

module.exports = router;