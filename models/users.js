const mongoose = require("mongoose"); //import mongoose

// Users schema
const UsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    user_type: String
});

const Users = mongoose.model('Users', UsersSchema); //convert to model named Users
module.exports = Users; //export for controller use