const express = require('express')
const multer = require('multer')

const { Videos } = require('../database/models')
const uploadConfig = require('../config/uploadConfig')
const robots = require('../app/video')

const routes = new express.Router()
const upload = multer(uploadConfig)

routes.post('/upload', upload.single('video'), async (req, res, ) => {

    const { immersionId } = req.body
    const { filename: filesName } = req.file

    const transcription = filesName.replace('.mp4', '.txt')

    await Videos.create({
        filesName,
        transcription,
        immersionId
    })
        .them(res => res.json(res))
        .catch(error => res.json(error))

    await robots(filesName)
})
module.exports = routes