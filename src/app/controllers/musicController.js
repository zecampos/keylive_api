const express = require('express')

const authMiddleware = require('../middlewares/auth')
const Music = require('../models/music')
const router = express.Router();
router.use(authMiddleware)

router.get('/', async (req, res) => {
    try {
        const music = await Music.find({user : req.userId})
        return res.send({music})
    } catch (error) {
        return res.status(400).send({ error: 'Error loading Song' })
    }
})

router.get('/:musicId', async (req, res) => {
    try {
        const music = await Music.findById(req.params.musicId)
        return res.send({music})
    } catch (error) {
        return res.status(400).send({ error: 'Error loading Song' })
    }
})

router.post('/', async (req, res) => {
    try {
        const music = await Music.create({...req.body, user: req.userId})
        return res.send({music})
    } catch (error) {
        return res.status(400).send({ error: 'Error creating new Song' })
    }
})

router.put('/:musicId', async (req, res) => {
    res.send({ user: req.userId })
})

router.delete('/:musicId', async (req, res) => {
    try {
        await Music.findByIdAndRemove(req.params.musicId)
        return res.send({message : 'remove sucess'})
    } catch (error) {
        return res.status(400).send({ error: 'Error delete Song' })
    }
})


module.exports = app => app.use('/musics', router)