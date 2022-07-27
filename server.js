const express = require("express");
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv")
const port = process.env.PORT || 8080;
const bodyparser = require("body-parser")
const postRoutes = require("./routes/weight.js")
const cors = require("cors")
dotenv.config()
var output = 0
app.use(cors())
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use("/weight", postRoutes);
app.get("/",(req,res)=>{
    res.send("hello world")
})

mongoose
  .connect(mongodb+srv://lolan:lolan@cluster0.ke01k.mongodb.net/?retryWrites=true&w=majority)
  .then(() =>
    app.listen(port, () => console.log(`server running on port ${port}`))
  )
  .catch((err) => console.log(err.message));
