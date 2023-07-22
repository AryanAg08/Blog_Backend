const router = require("express").Router();

const Blog_post = require("../Models/3.BlogPosts");

router.get("/blog-posts", async (req, res) => {
    const ID = req.query.id;
    console.log(ID);
    try {
        const post = await Blog_post.find({
            id: ID,
        });
        if (!post) {
            return res.status(404).json({ error: 'Blog post not found' });
          }
          console.log(post);
          res.json(post);
    }
    catch (error) {
        console.error('Error retrieving blog post:', error);
        res.status(500).json({ error: 'Server error!!' });
      }

});

router.post("/blog-create", async (req, res) => {
    console.log(req.body);

    res.json({ code: 200, status: "Message Sent"});
    const { Title, Author, Content, id } = req.body;

     const Blog_Create = {
        id: id,
        title: Title,
        author: Author,
        content: Content
     }

     const B1 = await new Blog_post(Blog_Create).save();


})



module.exports = router;