const express = require('express'); //import express
const router  = express.Router(); 
const treatmentController = require('../controllers/treatment'); 
const multer = require('multer');
const upload = multer();

router.get('/treatment', treatmentController.getAllTreatment); 
router.post('/treatment', upload.none(), treatmentController.newTreatment); 
router.delete('/treatment', treatmentController.deleteAllTreatment); 

router.get('/treatment/:name', treatmentController.getOneTreatment);
router.post('/treatment/:name', upload.none(), treatmentController.newComment);
router.delete('/treatment/:name', treatmentController.deleteOneTreatment);

module.exports = router; // export to use in server.js
