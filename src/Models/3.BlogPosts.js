const mongo = require("mongoose");

const BP = new mongo.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: false,
    }, 
    content: {
        type: String,
        required: false,
    }
});

module.exports = mongo.model("Blog-Posts", BP);