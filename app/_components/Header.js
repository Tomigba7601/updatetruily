import React from "react";
import Container from "./Container";
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
  return (
    <div className="py-4 h-16 bg-main flex items-center px-4 md:px-0 ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/truly.png" className="w-10 h-10 object-cover" />
            <h2 className="text-red font-bold text-lg">Truily</h2>
          </div>
          <div className="items-center gap-8 hidden md:flex">
            <Link href="#" className="text-red font-medium text-base">
              Home
            </Link>
            <Link href="#" className="text-red font-medium text-base">
              About
            </Link>
            <Link href="#" className="text-red font-medium text-base">
              Contact
            </Link>
          </div>
          <div>
            <button className="bg-red px-4 hidden md:flex py-2 font-medium text-base text-white rounded-md">
              SignIn
            </button>
          </div>
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
