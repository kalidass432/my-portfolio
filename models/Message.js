const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
    date: {type: Date, default: Date.now},
},{collection: "port"});

module.exports = mongoose.model("Message", messageSchema);