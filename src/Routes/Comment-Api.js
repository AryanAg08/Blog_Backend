const router = require("express").Router();


router.post("/CommentAdd", async (req, res) => {
    const id = req.query.id;

    console.log(req.body);

    res.json({code: 200});
});

module.exports = router;