const express = require('express');
const router = express.Router();


const { postUser } = require('../controllers/userController');

router.post('/new', postUser);

module.exports = router;
