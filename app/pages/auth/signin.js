"use client";
import { signIn } from 'next-auth/react';

export default function SignIn() {
  // const handleGoogleLogin = () => {
    // window.location.href = '/api/auth/google';
  // };
  return (
    <div>
      {/* <h1>Sign In</h1> */}
      <button className="w-full mb-2 text-white bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
}
