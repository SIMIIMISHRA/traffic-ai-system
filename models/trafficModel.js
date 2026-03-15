const mongoose=require("mongoose")

const trafficSchema=new mongoose.Schema({

vehicleCount:Number,
density:String,
signalTime:Number,
timestamp:{
type:Date,
default:Date.now
}

})

module.exports=mongoose.model("Traffic",trafficSchema)