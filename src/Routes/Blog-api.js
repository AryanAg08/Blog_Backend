const router = require("express").Router();

const Blog_post = require("../Models/3.BlogPosts");

router.get("/blog-posts", async (req, res) => {
    const ID = req.query.id;

    try {
        const post = await Blog_post.find({
            id: ID,
        });
        if (!post) {
            return res.status(404).json({ error: 'Blog post not found' });
          }
      
          res.json(post);
    }
    catch (error) {
        console.error('Error retrieving blog post:', error);
        res.status(500).json({ error: 'Server error!!' });
      }

});

router.post("/blog-create", (req, res) => {
    console.log(req.body);

    res.json({ code: 200, status: "Message Sent"});
})



module.exports = router;