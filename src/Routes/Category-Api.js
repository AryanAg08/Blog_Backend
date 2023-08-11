const Router = require("express").Router();
const CategoryModel = require("../Models/5.Category");

Router.get("/catergories", async (req, res) => {

    try {
        const C1 = await CategoryModel.find();

        res.json(C1);
    }
    catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});

Router.get("/categories/:id", async (req, res) => {
    try {
        const C2 = await CategoryModel.findById(req.params.id);
        if (!C2) {
            return res.status(404).json({ error: "category not found!!"});
        }
        res.json(C2);
    }
    catch (err) {
        
    }
})

module.exports = Router;