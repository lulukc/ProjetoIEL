const express = require('express')
const { Immersion } = require('../database/models')
const robots = require('../app/Information')

const routes = new express.Router()

routes.post('/immersion', async (req, res) => {

    const { immersionName, immersionPlace, immersionCompany, immersionPeriod } = req.body

    await Immersion.create({
        immersionName,
        immersionPlace,
        immersionCompany,
        immersionPeriod
    })
        .then(function (immersion) {
            this.state = immersion.dataValues
            return res.json(immersion)
        })
        .catch(error => res.json(error))

    await robots(state)
})

module.exports = routes