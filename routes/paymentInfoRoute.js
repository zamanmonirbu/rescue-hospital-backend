const express = require('express');
const { payment } = require('../controllers/PaymentController');
const router = express.Router();



router.post('/', payment);


module.exports = router;
