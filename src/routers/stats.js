const express = require("express")
const router = new express.Router()
const Price = require("../models/price")
const Weight = require("../models/weight")
const Country = require("../models/country")
const EMSMONTH = require("../models/emsMonth")
const EMSYEAR = require("../models/emsYear")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/emsYear', async (req, res) => {  // get one price
    try {
        const year = new Date().getFullYear()+'-'
        const all = await EMSYEAR.find({})
        if (!all) {
            return res.status(404).send('Prix non inexistant')
        }
        var results = all.filter(element => {
            return element.month.includes(year)
        });
        res.status(200).send(results)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.get('/emsMonth/:month', async (req, res) => {  // get one price
    try {
        const month = '-' + req.params.month + '-'
        const all = await EMSMONTH.find({})

        if (!all) {
            return res.status(404).send('Prix non inexistant')
        }
        var results = all.filter(element => {
            return element.date.includes(month)
        });
        res.status(200).send(results)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})

module.exports = router