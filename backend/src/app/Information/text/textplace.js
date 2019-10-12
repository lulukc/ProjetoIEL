const Algorithmia = require('algorithmia')
const algorithmiaKey = require('../../credentials/algorithmiaKey.json').apiKey
const fs = require('fs')
let saveWikiText = require('../../../../upload/info/textplace.json')
const { Information } = require('../../../database/models')
const path = require('path')

module.exports = robot = async (Place, state) => {

    const wikipediaExtract = async  place => {
        const input = {
            articleName: place,
            lang: "pt"
        }
        const algorithmiaAuthenticated = Algorithmia(algorithmiaKey)
        const wikepediaAlgorithmia = await algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2?timeout=300')
        const wikepediaResponce = await wikepediaAlgorithmia.pipe(input)
        const wikipediaContent = wikepediaResponce.get()
        saveWikiText.wikiText = wikipediaContent.summary


        let text = JSON.stringify(saveWikiText, null, 2)
        fs.writeFile( path.resolve(__dirname, '..', '..', '..', '..', 'upload', 'info', 'textplace.json'),
            `${text}`, err => {
                console.log(err || 'arquivo salvo');
            })
    }

    const clearText = async text => {
        const allLines = text.split('\n')
        const withoutBlankLinesAndMarkdown = allLines.filter((line) => {

            if (line.trim().length === 0 || line.trim().startsWith('=')) {
                return false
            }
            return true
        })
        const txt = withoutBlankLinesAndMarkdown.join(" ")

        const removeParentheses = txt => {
            return txt.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g, ' ')
        }
        const immersionPlace = await removeParentheses(txt)
        return immersionPlace

    }
    await wikipediaExtract(Place)
    clearText(saveWikiText.wikiText)
        .then(async immersionPlace => {
            await Information.update(
                { place: immersionPlace },
                { where: { id: state } }
            )
                .then(resul => console.log(resul))

        })
        .catch(err => console.log(err))
}