const mongoose = require("mongoose");

const ScooterSchema = new mongoose.Schema({
  scootername: {
    type: String,
    required: true,
  },
});

const ScooterModel = mongoose.model("scooters", ScooterSchema);
module.exports = ScooterModel;
