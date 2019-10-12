const express = require('express')
const { Users } = require('../database/models')
const bcrypt = require('bcrypt-nodejs')
const moment = require('moment')
const jwt = require('jwt-simple')
//const secret = 'seusegredodetoken'


const routes = new express.Router()

routes.post('/login', async (req, res) => {
    const { username, password } = req.body

    Users.findOne({ where: { email: username } })
        .then(async user => {
            await bcrypt.compare(password, user.password, (err, compare) => {
                if (compare == true) {
                    const expires = moment().add(7, 'days').valueOf()
                    const token = jwt.encode({
                        iss: user.id,
                        exp: expires
                    }, user.email)

                    return res.json({
                        token: token,
                        expires: expires,
                        user: user.email
                    })
                } else {
                    res.json('Senha invalida')
                }
            })
        }).catch(() => res.json('usuario nao cadastrado'))
})

module.exports = routes