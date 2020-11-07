const mongoose = require('mongoose')
const emsMonthSchema = new mongoose.Schema({
    date: {
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

const P = mongoose.model('emsMonths', emsMonthSchema)

module.exports = P