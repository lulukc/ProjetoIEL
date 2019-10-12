const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()
const ports = 3003

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..','upload','videos')) )

app.use('/transcriptions', express.static(path.resolve(__dirname, '..','upload','transcriptions')) )
app.use(require('./routes/Users'))
app.use(require('./routes/Immersion'))
app.use(require('./routes/upload'))
app.use(require('./routes/login'))
app.use(require('./routes/homeuser'))

app.listen(ports, () => {
    console.log(`Servidor rodando na porta ${ports}`)
})