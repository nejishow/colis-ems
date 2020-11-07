const express = require("express")
const router = new express.Router()
const EMS = require("../models/ems")
const EXPRESS = require("../models/express")
const EMSMONTH = require("../models/emsMonth")
const EMSYEAR = require("../models/emsYear")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/ems', async (req, res) => {  // post one ems
    try {
        const ems = await new EMS(req.body.params)
        await ems.save()
        res.status(200).send()
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post('/ems-stats', async (req, res) => {
    try {
        let date = req.body.params.to.date
        console.log(req.body.params.from);
        let neweYear = {}
        let newemonth = {}
        let emonth = await EMSMONTH.findOne({ date: date,type:1 })
        if (!emonth) {
            newemonth = new EMSMONTH()
            newemonth.date = date
            newemonth.total = parseInt(req.body.params.to.price)
            newemonth.type = 1
            try {
                await newemonth.save()

            } catch (error) {
                return res.status(500).send("eroor newmonth")

            }
        } else {
            emonth.total = emonth.total + parseInt(req.body.params.to.price)
            await emonth.save()

        }
        let month = new Date(req.body.params.to.date).getFullYear()+'-'+(new Date(req.body.params.to.date).getMonth()+1)
        let eYear = await EMSYEAR.findOne({ month: month,type:1 })
        if (!eYear) {
            neweYear = new EMSYEAR()

            neweYear.month = month
            neweYear.total = parseInt(req.body.params.to.price)
            neweYear.type = 1


            try {
                await neweYear.save()

            } catch (error) {
                return res.status(500).send("eroor newyear")

            }
        } else {
            eYear.total += parseInt(req.body.params.to.price)
            await eYear.save()
        }
        return res.status(200).send(neweYear, newemonth, eYear, emonth)

    } catch (error) {
        res.status(404).send(error)
    }
})
router.post('/express-stats', async (req, res) => {
    try {
        let date = req.body.params.from.date
        let neweYear = {}
        let newemonth = {}
        let emonth = await EMSMONTH.findOne({ date: date,type:2 })
        if (!emonth) {
            newemonth = new EMSMONTH()
            newemonth.date = date
            newemonth.total = parseInt(req.body.params.to.price)
            newemonth.type = 2
            try {
                await newemonth.save()

            } catch (error) {
                return res.status(500).send("eroor newmonth")

            }
        } else {
            emonth.total = emonth.total + parseInt(req.body.params.to.price)
            await emonth.save()

        }
        let month = new Date(req.body.params.from.date).getFullYear()+'-'+(new Date(req.body.params.from.date).getMonth()+1)
        let eYear = await EMSYEAR.findOne({ month: month,type:2 })
        if (!eYear) {
            neweYear = new EMSYEAR()

            neweYear.month = month
            neweYear.total = parseInt(req.body.params.to.price)
            neweYear.type = 2


            try {
                await neweYear.save()

            } catch (error) {
                return res.status(500).send("eroor newyear")

            }
        } else {
            eYear.total += parseInt(req.body.params.to.price)
            await eYear.save()
        }
        return res.status(200).send(neweYear, newemonth, eYear, emonth)

    } catch (error) {
        res.status(404).send(error)
    }
})
router.post('/allEms', async (req, res) => {  // get all ems
    try {
        const ems = await EMS.find({ 'to.date': req.body.params.date })
        const expres = await EXPRESS.find({ 'from.date': req.body.params.date })
        const data = ems.concat(expres)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.get('/ems/:id', async (req, res) => {  // get all ems
    try {
        const ems = await EMS.findById({ _id: req.params.id })
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
        const express = await EXPRESS.find({ 'from.date': req.body.params.date })
        res.status(200).send(express)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})
router.get('/express/:id', async (req, res) => {  // get all ems
    try {
        const express = await EXPRESS.findById({ _id: req.params.id })
        res.status(200).send(express)
    } catch (error) {
        res.status(404).send('Problem de serveur')
    }
})

module.exports = router