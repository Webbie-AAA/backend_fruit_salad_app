const express = require('express');
const router = express.Router();
const fruits = require('../controller/fruitControllers')
//after router, pass the controllers that the route will work with

//When we go to this end point. this calls the fruits from my index, which
//calls my fruits 
router.get('/', fruits.index) //Why remove the '/fruits' from the file path? Because app.js ensuring it already
router.get('/:name', fruits.show)
router.post('/', fruits.create)
router.patch('/:name', fruits.update) //put changes whole fruit, patch changes a single element within the obj (Like a misspelling)
router.delete('/:name', fruits.destroy)
//Follow same convention as show 


module.exports = router;