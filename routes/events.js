const express = require('express'); //import express
const router  = express.Router(); 
const eventsController = require('../controllers/events'); 
const multer = require('multer');
const upload = multer();

router.get('/events', eventsController.getAllEvents); 
router.post('/events', upload.none(), eventsController.newEvents); 
router.delete('/events', eventsController.deleteAllEvents); 

router.get('/events/:id', upload.none(), eventsController.getOneEvents);
router.delete('/events/:id', eventsController.deleteOneEvents);

module.exports = router; // export to use in server.js
