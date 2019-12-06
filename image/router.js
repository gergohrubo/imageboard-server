const { Router } = require('express')
const Image = require('./model')

const router = new Router()

router.get('/image', (req, res, next) => {
  Image.findAll()
    .then(images => res.send(images))
    .catch(next)
})

router.post('/image', (req, res, next) => {
  console.log(req.body)
  Image.create(req.body)
    .then(event => res.send(event))
})

module.exports = router