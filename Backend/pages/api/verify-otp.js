// /pages/api/verify-otp.js
import { getOtpFromDbOrSession } from './someOtpStorageLogic';

export default async function handler(req, res) {
  const { phoneNumber, otp } = req.body;

  // Fetch OTP from session or database
  const storedOtp = await getOtpFromDbOrSession(phoneNumber);

  if (storedOtp === otp) {
    // OTP is correct
    res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    // OTP is incorrect or expired
    res.status(400).json({ message: 'Invalid or expired OTP' });
  }
}



