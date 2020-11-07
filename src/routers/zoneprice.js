const express = require("express")
const router = new express.Router()
const Price = require("../models/zonePrice")
const Zone = require("../models/zone")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/zoneprice', async (req, res) => {  // get one price
    try {
        const price = await Price.findOne({ weight: req.body.params.weight, zone: req.body.params.zone })
        if (!price) {
            return res.status(404).send('Prix inexistant')
        }
        console.log(price);
        res.status(200).send(price.price)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.get('/allZone', async (req, res) => {  // get All countries
    try {
        const zones = await Zone.find({})
        if (!zones) {
            return res.status(404).send('Pas de zone pour le moment')
        }
        res.status(200).send(zones)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})

router.post('/zone', async (req, res) => {
    try {
        const zones = req.body
        zones.forEach(async zone => {
            const c = await new Zone(zone)
            await c.save()
        });
        return res.send()
    } catch (e) {
        res.status(404).send('Erreur lors de l\'enregistrement ' + e.message)
    }
})
router.post('/zonePrices', async (req, res) => {
    try {
        const prices = req.body
        prices.forEach(async zone => {
            const c = await new Price(zone)
            await c.save()
        });
        return res.send()
    } catch (e) {
        res.status(404).send('Erreur lors de l\'enregistrement ' + e.message)
    }
})
module.exports = router