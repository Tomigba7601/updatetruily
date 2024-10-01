"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PhoneNumberForm() {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Simple validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }
  
    setErrorMessage('');
    setLoading(true);
  
    try {
      // Send request to the backend to generate and send OTP
      const response = await fetch('http://localhost:5000/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ countryCode, phoneNumber }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Redirect to OTP page and pass state instead of using query parameters
        if (data.otp) {
          router.push(`/otp?otp=${encodeURIComponent(data.otp)}`);
  
          // Save phone number and OTP in localStorage or sessionStorage
          sessionStorage.setItem('phoneNumber', `${countryCode}${phoneNumber}`);
          sessionStorage.setItem('otp', data.otp);
  
        } else {
          setErrorMessage('OTP not received from the server.');
        }
      } else {
        setErrorMessage(data.message || 'Error sending OTP');
      }
    } catch (error) {
      setErrorMessage('Network error occurred');
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-md mx-auto p-6 rounded-lg ">
        <div className='text-center'>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">My Digits are</h2>
          <p>Keep your account safe: Verify your <br/> number now</p>
        </div>
        <br/>
        <br/>
        <br/>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
            <div className="flex items-center border border-t-0 border-r-0 border-l-0 rounded px-3 py-2 w-full md:w-1/3">
              <span className="text-gray-500 mr-1">+</span>
              <input
                type="number"
                name="country_code"
                id="country_code"
                placeholder="1"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-full outline-none text-gray-700"
                required
              />
            </div>

            <div className="flex-1 w-full">
              <input
                type="number"
                name="phone_number"
                id="phone_number"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border border-t-0 border-r-0 border-l-0 rounded px-3 py-2 outline-none text-gray-700"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <br/>
          <br/>
          <p>when you click continue, truily will send a text with verification code</p>
          <div>
            <button
              type="submit"
              className="w-full bg-red text-white font-semibold py-2 px-4 rounded hover:bg-red focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending OTP...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
