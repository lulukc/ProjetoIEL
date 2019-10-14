const express = require('express')
const { Immersion } = require('../database/models')
const robots = require('../app/Information')

const routes = new express.Router()

routes.post('/immersion', async (req, res) => {
    let state = {}
    const { immersionName, immersionPlace, immersionCompany } = req.body


    await Immersion.create({
        immersionName,
        immersionPlace,
        immersionCompany,
    })
        .then(immersion => {
            state = immersion.dataValues
            return res.json(immersion)
        })
        .catch(error => res.json(error))

    await robots(state)
})

module.exports = routes