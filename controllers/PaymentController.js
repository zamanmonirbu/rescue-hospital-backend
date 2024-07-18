const dotenv =require('dotenv');
dotenv.config();


const stripe = require('stripe')(process.env.STRIPE_KEY);
const payment = async (req, res) => {
  const { appointmentData } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Appointment with ${appointmentData.doctorName}`,
            },
            unit_amount: 5000, // e.g., $50.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { payment };
