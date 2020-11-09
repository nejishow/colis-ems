const express = require("express")
const router = new express.Router()
const Price = require("../models/price")
const LETTREPRICE = require("../models/lettrePrice")
const Country = require("../models/country")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/price', async (req, res) => {  // get one price
    try {
        const price = await Price.findOne({ weight: req.body.params.weight, country: req.body.params.country })

        if (!price) {
            return res.status(404).send('Prix non inexistant')
        }
        res.status(200).send(price.price)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.post('/lettrePrice', async (req, res) => {  // get one price
    try {
        const price = await LETTREPRICE.findOne({ weight: req.body.params.weight, country: req.body.params.country })

        if (!price) {
            return res.status(404).send('Prix non inexistant')
        }
        res.status(200).send(price.price)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.get('/allCountry', async (req, res) => {  // get All countries
    try {
        const countries = await Country.find({})
        if (!countries) {
            return res.status(404).send('Pas de pays pour le moment')
        }
        res.status(200).send(countries)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})

router.post('/countries', async (req, res) => {
    try {
        const countries = req.body
        countries.forEach(async country => {
            const c = await new Country(country)
            await c.save()
        });
    } catch (e) {
        res.status(404).send('Erreur lors de l\'enregistrement ' + e.message)
    }
})
module.exports = router