"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function OTPVerification() {
  const [otp, setOtp] = useState(Array(4).fill(''));
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Retrieve phone number and OTP from sessionStorage
    const storedPhoneNumber = sessionStorage.getItem('phoneNumber');
    const storedOtp = sessionStorage.getItem('otp');

    if (storedPhoneNumber && storedOtp) {
      setPhoneNumber(storedPhoneNumber);
      // setOtp(storedOtp.split('').slice(0, 4)); // Auto-fill OTP from storage
    }
  }, []);
  const inputs = Array.from({ length: 4 });

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]{1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1 && value) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    if (/^[0-9]{4}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      document.getElementById('submit-btn').focus();
    }
  };

  const redirectToApp = () => {
    // Try to open the app using the custom scheme or universal link
    window.location.href = 'yourapp://continue-registration'; 

    // Fallback to redirect to the App Store or Play Store if the app is not installed
    setTimeout(() => {
      if (navigator.userAgent.match(/Android/i)) {
        // Redirect to Play Store for Android devices
        window.location.href = 'https://play.google.com/store/apps/details?id=com.yourcompany.yourapp';
      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        // Redirect to App Store for iOS devices
        window.location.href = 'https://apps.apple.com/app/idyourappid';
      } else {
        // Fallback if the user is on a non-supported device
        window.location.href = 'https://yourapp.com/download';
      }
    }, 1000);  // Wait for 1 second before redirecting
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP Submitted:', otp.join(''));
    
    // Here you would normally send the OTP for verification to your server.
    // Assuming the OTP is verified successfully, redirect to the app:

    redirectToApp();
  };

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            <div className="max-w-md mx-auto text-center px-4 sm:px-8 py-10 rounded-xl">
              <header className="mb-8">
                <h1 className="text-2xl font-bold mb-1">Please Enter 4 Digit Code</h1>
                <p className="text-[15px] text-slate-500">
                  We sent a 4-digit Code to you at (97) 12345686
                </p>
              </header>

              <form id="otp-form" onSubmit={handleSubmit}>
                <div className="flex items-center justify-center gap-3">
                  {inputs.map((_, index) => (
                    <input
                      key={index}
                      id={`otp-input-${index}`}
                      type="text"
                      className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red"
                      maxLength="1"
                      value={otp[index]}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                    />
                  ))}
                </div>
                <div className="text-sm text-slate-500 mt-4">
                  Didn't receive code?{' '}
                  <a className="font-medium text-red hover:text-indigo-600" href="#">
                    Resend
                  </a>
                </div>

                <br />
                <br />

                <div className="max-w-[260px] mx-auto mt-4">
                  <button
                    id="submit-btn"
                    type="submit"
                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-red px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-red focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                  >
                    Verify Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left">
        <a className="text-xs text-slate-500 hover:underline" href="#">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
