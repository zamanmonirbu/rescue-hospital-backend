const BloodNeed = require('../models/BloodNeed');

// Handle blood need form submission
const searchBlood = async (req, res) => {
  try {
    const { district, subDistrict, bloodGroup } = req.body;

    const searchQuery = {};
    if (district) searchQuery.district = district;
    if (subDistrict) searchQuery.subDistrict = subDistrict;
    if (bloodGroup) searchQuery.bloodGroup = bloodGroup;

    const searchResults = await BloodNeed.find(searchQuery);

    res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error searching blood:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { searchBlood };
