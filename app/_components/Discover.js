"use client";
import React, { useState } from "react";

const Discover = () => {
  return (
    <div className="relative bg-hero bg-cover bg-top h-[400px] bg-fixed flex flex-col justify-center items-center py-10 px-4 md:px-0">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="mx-auto max-w-2xl flex flex-col items-center justify-center gap-6 md:gap-10 z-50">
        <h2 className="text-white text-3xl md:text-5xl text-center ">
          Discover your Perfect match on truily.com
        </h2>
        <p className="text-center text-white">
          Connect with genuine people and start your journey to lasting
          relationships today.
        </p>
        <button className="rounded-full px-8 py-2 border border-white bg-transparent hover:bg-white hover:text-black text-white">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Discover;
