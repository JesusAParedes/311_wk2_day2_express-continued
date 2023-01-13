const express = require('express');
const router = express.Router();
const contactsRoute = require('./contacts');

router.get('/contacts', contactsRoute);
router.get('/contacts/:id', contactsRoute);
router.post('/contacts', contactsRoute);


module.exports = router;