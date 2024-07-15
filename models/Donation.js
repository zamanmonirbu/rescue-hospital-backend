const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  mobile: { type: String, required: true },
  district: { type: String, required: true },
  subDistrict: { type: String },
  age: { type: Number },
  weight: { type: Number, required: true },
  lastDonationDate: { type: Date, required: true },
  bloodGroup:{ type: String, required: true },
  hasPhysicalProblem: { type: String },
});

module.exports = mongoose.model('Donation', DonationSchema);
