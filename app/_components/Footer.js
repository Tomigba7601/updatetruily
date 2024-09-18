import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="z-50 flex flex-col overflow-x-hidden bg-main px-4 pb-8 pt-[40px] text-white md:px-0">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-4 px-2 md:grid-cols-5 md:px-6">
        <div className="col-span-1 flex flex-col gap-2 md:col-span-2 md:gap-4">
          <div className="flex items-center gap-2 mb-6">
            <img src="/truly.png" className="w-10 h-10 object-cover" />
            <h2 className="text-red font-bold text-lg">Truly</h2>
          </div>
          <p className="mt-[-30px] w-[90%] text-[15px] leading-[37px]">
            At truily.com, we strive to connect people looking for love,
            companionship, and friendship.
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-2 pt-8 md:gap-4 md:pt-0">
          <h2 className="text-[20px] font-semibold">
            Quick Links
          </h2>
          <div className="flex">
            <Link
              href={`#`}
              className="cursor-pointer text-base font-medium text-gray-100"
            >
              about
            </Link>
          </div>
          <div className="flex">
            <Link
              href={`#`}
              className="cursor-pointer text-base font-medium text-gray-100"
            >
              contact
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href={`#`}
              className="cursor-pointer text-base font-medium text-gray-100"
            >
              Faq
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-2 pt-8 md:gap-4 md:pt-0">
          <h2 className="pl-0 text-[20px] font-semibold">Legal</h2>
          <div className="flex flex-col gap-4">
            <Link
              href={`#`}
              className="cursor-pointer text-base font-medium text-gray-50"
            >
              Privacy
            </Link>
            <Link
              href={`#`}
              className="cursor-pointer text-base font-medium text-gray-100"
            >
              Terms
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6 pt-8 md:col-span-1 md:pt-0">
          <h2 className="pl-0 text-[20px] font-semibold ">Follow</h2>
          <a
            className="cursor-pointer text-base font-medium text-gray-100"
            href={`#`}
          >
            Facebook
          </a>
          <a
            className="cursor-pointer text-base font-medium text-gray-100"
            href={`#`}
          >
            Instagram
          </a>
          <a
            className="cursor-pointer text-base font-medium text-gray-100"
            href={`#`}
          >
            Twitter
          </a>
        </div>
      </div>
      <hr className="border-1 mx-auto mb-7 mt-14  h-px w-full bg-gray-100" />
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <p className="cursor-pointer text-base font-medium text-gray-100 ">
          © Truily 2024 from Vibings Inc
        </p>
      </div>
    </div>
  );
};

export default Footer;
