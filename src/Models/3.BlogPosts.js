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
    },
    Comment: {
        type: [Object],
        required: false,
    },
    HashTag: {
       type: String,
       required: false,
    },
     views: {
        type: Number,
        required: false,
     },
     likes: {
        type: Number,
        required: false,
     },
     dislikes: {
        type: Number,
        required: false,
     },
     Trending: {
        type: Number,
        required: false,
     },
     CreatedTimeStamp: {
        type: String,
        required: false,
     },
     
});

module.exports = mongo.model("Blog-Posts", BP);