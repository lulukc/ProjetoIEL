const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
ffmpeg.setFfmpegPath(ffmpegPath)

module.exports = (filename, filenameAudio) => {
    const options = {
        input: path.resolve(__dirname, '..', '..', '..', 'upload', 'videos', filename),
        output: path.resolve(__dirname, '..', '..', '..', 'upload', 'audios', filenameAudio),
    }

    return new Promise((resolve, reject) => {

        ffmpeg(options.input)
            .audioCodec('flac')
            .audioBitrate('128k')
            .audioChannels(1)
            .audioFrequency(16000)
            .on('error', err => {
                console.log(err)
                reject(err)
            })
            .on('end', (x) => {
                console.log(`salvo em ${options.output}`)
                resolve(x)
            })
            .save(options.output)

    })
}