const mongo = require("mongoose");

const CAT = new mongo.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongo.model("Category-Schema", CAT);