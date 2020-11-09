const mongoose = require('mongoose')
const lettrePriceSchema = new mongoose.Schema({
    price: {
        type: String,
    },
    country: {
        type: String,
    },
    weight: {
        type: Number,
    },
    enabled: {
        type: Boolean,
        default: true
    },
},
    { timestamps: true })

const P = mongoose.model('lettrePrices', lettrePriceSchema)

module.exports = P