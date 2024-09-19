import React from "react";
import Hero from "./_components/Hero";
import Discover from "./_components/Discover";
// import Faq from "./_components/Faq";
import About from "./_components/About";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Discover />
      {/* <Faq /> */}
    </div>
  );
};

export default page;
