const wikiBotPlace = require('./text/textplace')
const wikiBotCompany = require('./text/textcompany')
const googleBotPlace = require('./image/Imageplace')
const googleBotCompany = require('./image/Imagecompany')
const { Information } = require('../../database/models')

module.exports = robot = async immersion => {

    const information = {
        place: '',
        placeImage: '',
        company: '',
        companyImage: '',
        immersionId: immersion.id
    }
    await Information.create(information)
        .then(function (immersion) {
            this.state = immersion.dataValues
        })
        .catch(error => console.log(error))

    await wikiBotPlace(immersion.immersionPlace, state.id)
    await wikiBotCompany(immersion.immersionCompany, state.id)

    await googleBotPlace(immersion.immersionPlace, state.id)
   // await googleBotCompany(immersion.immersionCompany, state.id)

}

