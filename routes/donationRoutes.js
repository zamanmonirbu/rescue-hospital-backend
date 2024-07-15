const express = require('express');
const router = express.Router();
const { donateBlood } = require('../controllers/DonationController');

// POST /api/donation
router.post('/', donateBlood);


module.exports = router;
