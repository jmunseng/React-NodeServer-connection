const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        task: String,
        title: String,
        describe:String,
        expireDate: String,
        content:String,
        condition: String,
        reward: String,
        number: String
    }
)

module.exports = mongoose.model("Task", taskSchema)
