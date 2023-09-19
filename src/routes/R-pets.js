const express = require('express')
const router = express.Router()
const petsController = require('../controllers/C-pets')


router.get('/pets/:id', petsController.list)
// router.get('/pets/:id', petsController.show)
router.post('/pets', petsController.create)
router.put('/posts/id', petsController.update)
router.delete('/posts/id', petsController.deletePost)
router.delete('/pets/id', petsController.deletePet)


module.exports = router