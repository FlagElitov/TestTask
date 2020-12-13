const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  arrivalHour: {
    type: String,
    required: true,
  },
  sendingTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Route", RouteSchema);
