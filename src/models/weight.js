const mongoose = require('mongoose')
const weightSchema = new mongoose.Schema({
    weight: {
        type: String,
    },
    enabled: {
        type: Boolean,
        default: true
    },
},
    { timestamps: true })

const W = mongoose.model('weights', weightSchema)

module.exports = W