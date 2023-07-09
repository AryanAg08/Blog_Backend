const mongo = require("mongoose");

const DAuth = new mongo.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    picture: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    }
});

module.exports = mongo.model("DiscordAuth", DAuth);