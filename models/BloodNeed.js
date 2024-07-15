const mongoose = require('mongoose');

const BloodNeedSchema = new mongoose.Schema({
  district: { type: String, required: true },
  subDistrict: { type: String },
  bloodGroup: { type: String, required: true },
});

module.exports = mongoose.model('BloodNeed', BloodNeedSchema);
