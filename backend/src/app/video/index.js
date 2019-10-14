const converter = require('./converter')
const transcription = require('./transcription')

const robots = async (filename) => {

  const filenameAudio = filename.replace('.mp4', '.flac')

  await converter(filename, filenameAudio)

  await transcription(filenameAudio)

}

module.exports = robots