const router = require("express").Router();
const Blog = require("../Models/3.BlogPosts");


router.post("/CommentAdd", async (req, res) => {
    const id = req.query.id;

    // console.log(req.body);

    const Comment = {
        Author: req.body.Author,
        TimeStamp: req.body.TimeStamp,
        Content: req.body.CommentContent,
        id: id,
    }

    const A1 = await Blog.findByIdAndUpdate({
        _id: id
    },{
        $push: {
            Comment: Comment,
        },
    },{
        upsert: true,
    });

    console.log(A1);

    console.log(Comment);

    res.json({code: 200});
});

module.exports = router;