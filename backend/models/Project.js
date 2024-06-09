const mongoose = require("mongoose");
const  { Schema } = mongoose;

const projectSchema = new Schema({
        title:String,
        description:String,
        image:String,
        language: String
    },
    { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema)

module.exports = {
    Project
}