const express = require('express');
const router = express.Router();
const { searchDonors } = require('../controllers/DonationController');

router.get('/search', searchDonors);


module.exports = router;

// /api/donations/search