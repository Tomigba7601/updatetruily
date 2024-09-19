"use client";
import Container from "./Container";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <div className="relative bg-hero bg-cover bg-top md:h-screen flex flex-col justify-center py-16 md:py-14 px-4 md:px-0">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <Container>
        <div className="grid grid-cols md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="flex flex-col gap-4 z-50 max-w-[30rem]">
            <h2 className="z-50 text-white text-[2rem] leading-[2.5rem] font-bold">
              Get noticed for who you are, not what you look like.
            </h2>
            <p className="z-50 text-white">
              You’re more than just a photo. You have stories to tell, and
              passions to share, and things to talk about that are more
              interesting than the weather. Because you deserve what dating
              deserves: better.
            </p>
            <button className="bg-red flex px-6 text-base font-semibold py-2 rounded-full border-2 border-white text-white w-max">
              Join Us
            </button>
            <div className="flex gap-4 items-center mt-4">
              <button>
                <img src="/google-play.png" className="w-36" />
              </button>
              <button>
                <img src="/app-store.png" className="w-36" />
              </button>
            </div>
          </div>
          {/* <div className="flex flex-col gap-4 w-[340px] md:w-[400px] mx-auto bg-white bg-opacity-20 rounded-md z-50 p-8">
            <div>
              <label className="font-medium text-base text-white mb-2">
                I am
              </label>
              <Select
              //   onValueChange={(value) => {
              //     setSelectedValue(value);
              //     setValue("category", value); // Directly set the category as the ID
              //     trigger("category");
              //   }}
              >
                <SelectTrigger
                  className="text-base py-5 mt-3 text-white z-50"
                  style={{ boxShadow: "none" }}
                >
                  <SelectValue placeholder={"Select an option"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="option 1">Option 1</SelectItem>
                    <SelectItem value="option 2">Option 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="font-medium text-base text-white mb-2">
                Looking For
              </label>
              <Select
              //   onValueChange={(value) => {
              //     setSelectedValue(value);
              //     setValue("category", value); // Directly set the category as the ID
              //     trigger("category");
              //   }}
              >
                <SelectTrigger
                  className="text-base py-5 mt-3 text-white z-50"
                  style={{ boxShadow: "none" }}
                >
                  <SelectValue placeholder={"Select an option"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="option 1">Option 1</SelectItem>
                    <SelectItem value="option 2">Option 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-medium text-base text-white"
              >
                Email
              </label>
              <Input
                type="email"
                placeholder="Email"
                className="py-5 text-white mt-3 z-50 placeholder-white"
              />
            </div>
            <div>
              <label className="font-medium text-base text-white mb-2">
                City
              </label>
              <Select
              //   onValueChange={(value) => {
              //     setSelectedValue(value);
              //     setValue("category", value); // Directly set the category as the ID
              //     trigger("category");
              //   }}
              >
                <SelectTrigger
                  className="text-base py-5 mt-3 text-white z-50"
                  style={{ boxShadow: "none" }}
                >
                  <SelectValue
                    placeholder={"Select an option"}
                    className="z-50"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="option 1">Option 1</SelectItem>
                    <SelectItem value="option 2">Option 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <button className="bg-red px-4 py-2 z-50 text-white">
              Get Started
            </button>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
