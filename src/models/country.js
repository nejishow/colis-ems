const mongoose = require('mongoose')
const countrySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    enabled: {
        type: Boolean,
        default: true
    },
},
    { timestamps: true })

const C = mongoose.model('countrys', countrySchema)

module.exports = C