const mongoose = require('mongoose')
const emsYearSchema = new mongoose.Schema({
    month: {
        type: String,
    },
    total: {
        type: Number,
    },
    enabled: {
        type: Boolean,
        default: true
    },
    type: {
        type: Number
    }
},
    { timestamps: true })

const P = mongoose.model('emsYears', emsYearSchema)

module.exports = P