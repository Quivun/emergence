const express = require('express'); //import express
const router  = express.Router(); 
const diseaseController = require('../controllers/disease'); 
const multer = require('multer');
const upload = multer();

router.get('/disease', diseaseController.getAllDisease); 
router.post('/disease', upload.none(), diseaseController.newDisease); 
router.delete('/disease', diseaseController.deleteAllDisease); 

router.get('/disease/:id', diseaseController.getOneDisease);
router.post('/disease/:id', upload.none(), diseaseController.newComment);
router.delete('/disease/:id', diseaseController.deleteOneDisease);

module.exports = router; // export to use in server.js
