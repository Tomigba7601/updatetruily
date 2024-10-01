import React from "react";
import Hero from "./_components/Hero";
import Discover from "./_components/Discover";
// import Faq from "./_components/Faq";
import About from "./_components/About";

// import OTPVerification from "./pages/otp";
// import PhoneNumberForm from "./pages/number";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Discover />
     {/* <PhoneNumberForm/>
      <OTPVerification/> */}
      {/* <Faq /> */}
    </div>
  );
};

export default page;
