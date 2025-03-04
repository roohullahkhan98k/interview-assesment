const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    Title:{type:String ,required:true},
    description:{type:String ,required:true},
    dueDate:{type:Date},
    priority:{type:String, enum:["low, medium, high"]}
    
})

module.exports = mongoose.model("Task", taskSchema);