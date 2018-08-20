var express = require('express');
var router = express.Router();
var ctrlDictionaries = require('../controllers/dictionaries.js');


router.get('/dictionaries', ctrlDictionaries.dictionaryList);
router.post('/dictionaries', ctrlDictionaries.dictionaryCreate);
router.get('/dictionaries/:dictionaryId', ctrlDictionaries.dictionaryReadOne);
router.put('/dictionaries/:dictionaryId', ctrlDictionaries.dictionaryUpdateOne);
router.delete('/dictionaries/:dictionaryId', ctrlDictionaries.dictionaryDeleteOne);


module.exports = router;