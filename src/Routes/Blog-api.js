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


});

router.get("/blog-delete", async (req, res) => {
    const id = req.query.id;

    const Blog_DElete = await Blog_post.findByIdAndDelete(id);
    
    console.log(Blog_DElete);
})

router.post("/blog-edit", async (req, res) => {
    const id = req.query.id;
     const Title = req.body.editableTitle;
     const Body = req.body.editableContent;
     
    console.log(id);
    console.log(req.body);

    const U1 = await Blog_post.findByIdAndUpdate({
        _id: id,
    }, {
         title: Title,
         content: Body,
    }, {
        upsert: true,
    })

    res.json({ code: 200, status: "Message Sent"});
/**
 * {
  _id: '64c55f70709c98e135ddc9d6',
  id: '116292893619193068027',
  title: 'Hello Wrold2`',
  author: 'Aryan ',
  content: 'Hello this is trying blog to be edit',
  __v: 0,
  isEditing: true,
  editableTitle: 'Hello World 1',
  editableContent: 'Hello this is trying blog to be edit'
}
 */


})



module.exports = router;