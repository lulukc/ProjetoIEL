const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1')
const fs = require('fs')
const path = require('path')
const webvtt = require('node-webvtt')

const speechToText = new SpeechToTextV1({
    iam_apikey: 'qUGT3mM_WK_8GFdSY1N6GqMk0GI1vf7e57tgrXgJ_zzU',
    url: 'https://gateway-syd.watsonplatform.net/speech-to-text/api'
})

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

module.exports = robots = (filenameAudio) => {



    const pathAudio = path.resolve(__dirname, '..', '..', '..', 'upload', 'audios', filenameAudio)

    const params = {
        audio: fs.createReadStream(pathAudio),
        model: 'pt-BR_BroadbandModel',
        content_type: 'audio/flac',
        timestamps: true,
        max_alternatives: 3
    }

    speechToText.recognize(params)
        .then(ibmResult => {
            const { results } = ibmResult
            const timestamps = results.flatMap(e => e.alternatives).flatMap(e => e.timestamps).filter(e => e != undefined)
            return timestamps
        })
        .then(timestamps => {
            let caption = {
                "valid": true,
                "cues": []
            }
            for (let i = 0; i < timestamps.length; i++) {
                caption.cues.push({
                    "identifier": "",
                    "start": timestamps[i][1],
                    "end": timestamps[i][2],
                    "text": timestamps[i][0],
                    "styles": ""
                })
            }
            return caption
        })
        .then(caption => {
            const compile = webvtt.compile(caption)
            const fileNameTranscript = filenameAudio.replace('.flac', '.pt.vtt')

            fs.writeFile(path.resolve(__dirname, '..', '..', '..', 'upload', 'transcriptions', fileNameTranscript),
                `${compile}`, err => {
                    console.log(err || 'Arquivo salvo!')
                })
        })
        .catch(err => console.log(err))

}