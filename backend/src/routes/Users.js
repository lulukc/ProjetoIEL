const express = require('express')
const { Users } = require('../database/models')
const bcrypt = require('bcrypt-nodejs')

const routes = new express.Router()

routes.post('/users', async (req, res) => {

    const { email, password, confirmPassword, firstName, lastName, company, immersionId } = req.body
    
    if (password == confirmPassword) {
        const hash = bcrypt.hashSync(password)
        await Users.create({
            email,
            password: hash,
            firstName,
            lastName,
            company,
            immersionId
        })
            .then(user => res.json(user))
            .catch(error => res.json(error))
    }else{
        res.json('as senhas não são iguais')
    }
})

routes.get('/users', async (req, res) => {

    Users.findAll({})
        .then(user => res.json(user))
        .catch(error => res.json(error))
})

module.exports = routes