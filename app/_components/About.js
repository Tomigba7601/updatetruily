import React from "react";
import Container from "./Container";

const About = () => {
  return (
    <div className="py-16 px-4 md:px-0">
      <h2 className="text-center text-red text-3xl font-bold">
        About truily.com
      </h2>
      <Container>
        <div className="grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-12 md:mt-20 items-start hidden md:grid">
          <div>
            <img
              src="/loveone.jpg"
              alt=""
              className="rounded-md h-60 object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-3 max-w-lg">
            <h2 className="font-bold text-xl">Our Mission</h2>
            <p className="text-gray-500 ">
              At truily.com, we strive to connect people looking for love,
              companionship, and friendship. Our mission is to create a safe and
              welcoming environment where everyone can find their perfect match.
            </p>
          </div>
          <div className="flex flex-col gap-3 max-w-lg">
            <h2 className="font-bold text-xl">Our Story</h2>
            <p className="text-gray-500 ">
              At truily.com, we strive to connect people looking for love,
              companionship, and friendship. Our mission is to create a safe and
              welcoming environment where everyone can find their perfect match.
            </p>
          </div>
          <div>
            <img
              src="/lovetwo.webp"
              alt=""
              className="rounded-md h-60 object-cover w-full"
            />
          </div>
          <div>
            <img
              src="/lovethree.webp"
              alt=""
              className="rounded-md h-60 object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-3 max-w-lg">
            <h2 className="font-bold text-xl">Our Features</h2>
            <p className="text-gray-500 ">
              With advanced search filters, real-time chat, and video calling,
              truily.com has everything you need to find your soulmate. Our
              platform is user friendly and easy to navigate, making your online
              dating experience enjoyable.
            </p>
          </div>
        </div>
        <div className="grid-cols-1 gap-10 md:gap-20 mt-12 md:mt-20 items-start grid md:hidden">
          <div>
            <img
              src="/loveone.jpg"
              alt=""
              className="rounded-md h-60 object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-3 max-w-lg">
            <h2 className="font-bold text-xl">Our Mission</h2>
            <p className="text-gray-500 ">
              At truily.com, we strive to connect people looking for love,
              companionship, and friendship. Our mission is to create a safe and
              welcoming environment where everyone can find their perfect match.
            </p>
          </div>
          <div>
            <img
              src="/lovetwo.webp"
              alt=""
              className="rounded-md h-60 object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-3 max-w-lg">
            <h2 className="font-bold text-xl">Our Story</h2>
            <p className="text-gray-500 ">
              At truily.com, we strive to connect people looking for love,
              companionship, and friendship. Our mission is to create a safe and
              welcoming environment where everyone can find their perfect match.
            </p>
          </div>

          <div>
            <img
              src="/lovethree.webp"
              alt=""
              className="rounded-md h-60 object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-3 max-w-lg">
            <h2 className="font-bold text-xl">Our Features</h2>
            <p className="text-gray-500 ">
              With advanced search filters, real-time chat, and video calling,
              truily.com has everything you need to find your soulmate. Our
              platform is user friendly and easy to navigate, making your online
              dating experience enjoyable.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
