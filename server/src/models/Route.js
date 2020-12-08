const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  arrivalHour: {
    type: Number,
    required: true,
  },
  sendingTime: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Route", RouteSchema);
