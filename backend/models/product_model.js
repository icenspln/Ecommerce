const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    flavors: [{ type: String }],
    benifits: [{ type: String }],
    price: {
        type: Number,
        float: true, required: true,
    },
    size: {
        type: Number,
        double: true, required: true,
    },
    picture: { type: String, required: true },
    type: { type: String, required: true },

},


);


module.exports = new mongoose.model("product", productSchema);