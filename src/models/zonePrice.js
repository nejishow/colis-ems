const mongoose = require('mongoose')
const zonepriceSchema = new mongoose.Schema({
    price: {
        type: String,
    },
    zone: {
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

const P = mongoose.model('zoneprices', zonepriceSchema)

module.exports = P