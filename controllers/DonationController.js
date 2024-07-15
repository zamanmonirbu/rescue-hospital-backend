const Donation = require('../models/Donation');

// Handle donation form submission
const donateBlood = async (req, res) => {
  try {
    const {
      name,
      bloodGroup,
      address,
      mobile,
      district,
      subDistrict,
      age,
      weight,
      lastDonationDate,
      hasPhysicalProblem,
    } = req.body;

    const newDonation = new Donation(
        req.body
    );

    // console.log(newDonation)

    await newDonation.save();

    res.status(201).json({ message: 'Donation created successfully' });
  } catch (error) {
    console.error('Error donating blood:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const searchDonors = async (req, res) => {
    try {
      const { district, subDistrict, bloodGroup } = req.query;
      
      // Build the query object dynamically
      let query = {};
      if (district) query.district = district;
      if (subDistrict) query.subDistrict = subDistrict;
      if (bloodGroup) query.bloodGroup = bloodGroup;
  
      const donors = await Donation.find(query);
      res.status(200).json(donors);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

module.exports = { donateBlood,searchDonors };
