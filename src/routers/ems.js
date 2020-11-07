const express = require("express")
const router = new express.Router()
const EMS = require("../models/ems")
const EXPRESS = require("../models/express")

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
        const expres = await EXPRESS.find({'from.date':req.body.params.date})
        const data = ems.concat(expres)
        res.status(200).send(data)
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

router.post('/express', async (req, res) => {  // post one ems
    try {
        const express = await new EXPRESS(req.body.params)
        await express.save()
        res.status(200).send()
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.post('/allExpress', async (req, res) => {  // get all ems
    try {
        const express = await EXPRESS.find({'from.date':req.body.params.date})
        res.status(200).send(express)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.get('/express/:id', async (req, res) => {  // get all ems
    try {
        const express = await EXPRESS.findById({_id:req.params.id})
        res.status(200).send(express)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})

module.exports = router