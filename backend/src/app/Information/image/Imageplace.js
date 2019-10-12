const downloader = require('image-downloader')
const googleapi = require('googleapis').google
const customSearch = googleapi.customsearch('v1')
const path = require('path')
const { Information } = require('../../../database/models')

const googelCredentials = require('../../credentials/googlekey.json')

module.exports = robot = async (Place, state) => {


    const searchGoogleImage = async place => {

        const responce = await customSearch.cse.list({
            auth: googelCredentials.apiKey,
            cx: googelCredentials.searchEngineID,
            q: place,
            searchType: 'image',
            imgType: 'photo',
            num: 1
        })
        const imageURL = responce.data.items.map(items => items.link)
        return imageURL
    }

    const urlImageArrey = await searchGoogleImage(Place)


    const saveImage = async urlImageArrey => {

        let options = {
            url: urlImageArrey[0],
            dest: path.resolve(__dirname, '..', '..', '..', '..', 'upload', 'image', `${Place}.jpg`)
        }
        await downloader.image(options)
            .then(({ filename }) => {
                console.log('Saved to', filename)
            })
            .catch((err) => console.error(err))

    }


    await saveImage(urlImageArrey)

    await Information.update(
        { placeImage: `${Place}.jpg` },
        { where: { id: state } }
    )
        .then(resul => console.log(resul))
        .catch(err => console.log(err))
}