"use client";

import { useState } from 'react';
import Container from "./Container";
import SignIn from '../pages/auth/signin';
// import number from "../number"
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  const handleGoogleLogin = () => {
    window.location.href = '/api/auth/google';
  };

  return (
    <div className="py-4 h-16 bg-main flex items-center px-4 md:px-0 ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/truly.png" className="w-10 h-10 object-cover" />
            <h2 className="text-red font-bold text-lg">Truily</h2>
          </div>
          <div className="items-center gap-8 hidden md:flex">

            <Link href="" className="text-red font-medium text-base">
              About
            </Link>
            <Link href="#" className="text-red font-medium text-base">
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">

          </div>
          <div className="hidden md:flex items-center">
            <button onClick={openModal} className="bg-red text-white px-3 py-2 rounded-md text-sm font-medium">Signup</button>
          </div>
          {isModalOpen && (
            <div className="fixed z-30 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" id="pop"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <div>
                      <center>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Let's go!
                        </h3>
                        <p>By registering you agree to our Terms of service and Our privacy policy</p>
                      </center>
                    </div>
                    <form class="space-y-4" action="#">
                      <div className='md:p-5'>
                        <SignIn/>
                        <Link href="/number">
                          <button type="submit" class="w-full text-white bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <i class="fa-solid fa-phone mr-2"></i>
                            Use my phone number
                          </button>
                        </Link>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className='bg-gray-200 pb-4'>
                        <center>
                          <hr className='mb-8' />
                          <h3 className='mb-2'>Or get the App</h3>
                          <button type="submit" class="w-44 mr-3 text-white bg-gray-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                            <i class="fa-brands fa-apple text-1xl mr-2"></i>
                            Download on the App Store
                          </button>
                          <button type="submit" class="w-44 text-white bg-gray-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                            <i class="fa-brands fa-google-play text-1xl mr-2"></i>
                            Get it on Google Play
                          </button>
                        </center>
                      </div>

                    </form>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button onClick={closeModal} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white hover:bg-gray-900 sm:text-sm">Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex md:hidden">
            {" "}
            <Sheet>
              <SheetTrigger asChild>
                <AlignJustify color="white" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col justify-between overflow-y-auto bg-gray-700"
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <Link href="#" className="text-white font-medium text-base">
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className="text-white font-medium text-base">
                      About
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className="text-white font-medium text-base">
                      Contact
                    </Link>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <button className="w-full outline-none py-2 flex gap-2 justify-start px-4 rounded-sm bg-red text-white">
                      SignIn
                    </button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>





      </Container>
    </div>
  );
};

export default Header;
