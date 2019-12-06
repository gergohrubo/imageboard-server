const { Router } = require('express')
const Image = require('./model')

const router = new Router()

router.get('/image', (req, res, next) => {
  console.log('here are all the images to the console')
  Image.findAll()
    .then(images => res.send(images))
    .catch(next)
})

module.exports = router