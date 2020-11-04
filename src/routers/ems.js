const express = require("express")
const router = new express.Router()
const EMS = require("../models/ems")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/ems', async (req, res) => {  // post one ems
    try {
        const ems = await new EMS(req.body.params)
        await ems.save()
        res.status(200).send()
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.post('/allEms', async (req, res) => {  // get all ems
    try {
        const ems = await EMS.find({'to.date':req.body.params.date})
        res.status(200).send(ems)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.get('/ems/:id', async (req, res) => {  // get all ems
    try {
        const ems = await EMS.findById({_id:req.params.id})
        res.status(200).send(ems)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})

module.exports = router