const mongoose =require("mongoose")

const weightchema = mongoose.Schema({
  weight:String
});


const WeightSchema = mongoose.model('WeightSchema',weightchema)

module.exports = WeightSchema