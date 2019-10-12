const express = require('express')
const models = require('../database/models')
const auth = require('../Middleware/authentication')

const routes = new express.Router()

routes.get('/homeuser/:user', auth, async (req, res) => {

    const user = await models.Users.findOne({ where: { email: req.params.user } })

    await models.Videos.findAll({ where: { immersionId: user.immersionId } })
        .then(videos => res.json(videos))
        .catch(err => res.json(err))
})

module.exports = routes