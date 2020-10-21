const mongoose = require('mongoose')
const priceSchema = new mongoose.Schema({
    price: {
        type: String,
    },
    country: {
        type: String,
    },
    weight: {
        type: String,
    },
    enabled: {
        type: Boolean,
        default: true
    },
},
    { timestamps: true })

const P = mongoose.model('prices', priceSchema)

module.exports = P