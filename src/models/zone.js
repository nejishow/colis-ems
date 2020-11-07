const mongoose = require('mongoose')
const zoneSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    enabled: {
        type: Boolean,
        default: true
    },
},
    { timestamps: true })

const Z = mongoose.model('zones', zoneSchema)

module.exports = Z