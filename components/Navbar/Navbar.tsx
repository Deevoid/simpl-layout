import Image from "next/image";
import React from "react";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <nav className="fixed md:max-w-[360px] border-t -translate-x-1/2 left-1/2 bottom-0 h-14 w-full flex items-center justify-between bg-white">
      <div className="hover:bg-gray-100 cursor-pointer flex flex-col items-center gap-[6px] h-14 active-menu w-[90px] py-2">
        <Image src="/home.svg" height="20" width="20" alt="home page" />
        <p className="text-[10px] cursor-pointer text-primary font-semibold">
          Home
        </p>
      </div>
      <div className="hover:bg-gray-100 cursor-pointer flex flex-col items-center gap-[6px] h-14 w-[90px] py-2">
        <Image src="/passbook.svg" height="20" width="20" alt="home page" />
        <p className="text-[10px] cursor-pointer">Passbook</p>
      </div>
      <div className="hover:bg-gray-100 cursor-pointer flex flex-col items-center gap-[6px] h-14 w-[90px] py-2">
        <div className="relative h-[19px]">
          <Image src="/billbox.svg" height="20" width="20" alt="home page" />
          <div className="absolute -right-1 -top-1 w-[8px] h-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="7"
              fill="none"
              viewBox="0 0 9 9"
            >
              <circle
                cx="4.5"
                cy="4.5"
                r="3.5"
                fill="#E33F37"
                stroke="#fff"
                strokeWidth="2"
              ></circle>
            </svg>
          </div>
        </div>
        <p className="text-[10px] cursor-pointer">Billbox</p>
      </div>
      <div className="hover:bg-gray-100 cursor-pointer flex flex-col items-center gap-[6px] h-14 w-[90px] py-2">
        <Image src="/More.svg" height="20" width="20" alt="home page" />
        <p className="text-[10px] cursor-pointer">More</p>
      </div>
    </nav>
  );
};
