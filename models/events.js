const mongoose = require("mongoose"); //import mongoose

// Events schema
const EventsSchema = new mongoose.Schema({
    name: String,
    dosage: String,
    taken: Boolean,
    date: Date
});

const Events = mongoose.model('Events', EventsSchema); //convert to model named Events
module.exports = Events; //export for controller use