const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required : [true, "PRODCUT NAME MUST BE SUPPLIED AND MUST BE AT LEAST 2 CHARCTERS LONG"],
        min: 2
    },
    price : {
        type: Number,
        min : [1, "MUST BE AT LEAST $1"]
    },
    desc: {
        type: String,
        required : [true, "MUST HAVE A DESCRIPTION"]
    }
}, {timestamps : true})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product