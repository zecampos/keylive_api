const mongoose = require('../../database/index')
const bcrypt = require('bcryptjs')

const MusicSchema = new mongoose.Schema({
    songName: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Music = mongoose.model('Music', MusicSchema)

module.exports = Music