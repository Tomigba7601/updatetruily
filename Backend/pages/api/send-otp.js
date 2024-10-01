// // /pages/api/send-otp.js
// import twilio from 'twilio';

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Fetch from environment
// const client = twilio(accountSid, authToken);

// export default async function handler(req, res) {
//   const { countryCode, phoneNumber } = req.body;

//   const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP

//   try {
//     // Send OTP via Twilio
//     await client.messages.create({
//       body: `Your OTP code is ${otp}`,
//       from: twilioPhoneNumber, // Use the Twilio number from the .env file
//       to: `+${countryCode}${phoneNumber}`,
//     });

//     // Respond with OTP (for development, in production you wouldn't return the OTP)
//     res.status(200).json({ otp });
//   } catch (error) {
//     console.error('Twilio error:', error);
//     res.status(500).json({ message: 'Failed to send OTP' });
//   }
// }




// /pages/api/send-otp.js
require('dotenv').config();
const twilio = require('twilio');


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Fetch from environment
const client = twilio(accountSid, authToken);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { countryCode, phoneNumber } = req.body;

  const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP

  try {
    // Send OTP via Twilio
    await client.messages.create({
      body: `Your OTP code is ${otp}`,
      from: twilioPhoneNumber, // Use the Twilio number from the .env file
      to: `+${countryCode}${phoneNumber}`,
    });

    // Respond with OTP (for development; in production, you wouldn't return the OTP)
    res.status(200).json({ otp });
  } catch (error) {
    console.error('Twilio error:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
}

