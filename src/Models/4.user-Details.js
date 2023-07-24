const mongo = require("mongoose");

const user = new mongo.Schema({
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },

});


module.exports = mongo.model("User-Details", user);