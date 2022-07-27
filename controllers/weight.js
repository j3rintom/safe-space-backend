const WeightSchema = require("../model/weightSchema.js")
const mongoose = require("mongoose")

exports.updatePost = async (req,res) =>{
    const id = {_id:"62e0ec3a2a1080755cf24d7d"}
    const {weight} = req.body
    if(!mongoose.Types.ObjectId.isValid("62e0ec3a2a1080755cf24d7d")) return res.status(404).send('No post with that id')

   const updatedPost = await WeightSchema.findOneAndUpdate(id,{weight:weight},{new: true})

   res.send(updatedPost)
}

exports.getPosts = async (req,res) =>{
    const id = "62e0ec3a2a1080755cf24d7d"
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
    WeightSchema.findById(id,function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Result : ", docs);
        res.send(docs.weight)
    }})
}
