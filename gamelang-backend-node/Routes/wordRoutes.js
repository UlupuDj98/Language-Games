const express = require('express')
const Word = require('../models/word.js')
const wordController = require('../controller/wordController.js')

const router = express.Router()

router.get('/' , wordController.getAllWords)

router.get('/date/:date' , wordController.getWordsPerDate)

router.get('/language/:language', wordController.getWordsByLanguage)

router.post('/add-word' , wordController.addWord)

router.get('/:id' , wordController.getWordById)

router.patch('/:id' , wordController.updateWord)

router.delete('/:id' , wordController.deleteWord)

module.exports = router