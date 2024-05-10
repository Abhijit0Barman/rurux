const mongoose = require("mongoose");

const fieldsSchema = new mongoose.Schema({
    fieldsName : {type:String, required:true, unique:true},
})

const fieldsModel = mongoose.model("fields",fieldsSchema);

module.exports = {fieldsModel};