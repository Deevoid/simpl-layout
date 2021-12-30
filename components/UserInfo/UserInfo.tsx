import Image from "next/image";
import React from "react";
import { UserLogo } from "../UserLogo/UserLogo";

interface Props {}

export const UserInfo = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[7px]">
        <UserLogo />
        <div>
          <p className="text-white text-xs opacity-[56%] leading-3">Hello</p>
          <p className="leading-4 cursor-pointer">
            <span className="text-white text-base leading-4 mr-[6px]">
              Rohan
            </span>
            <Image
              src="/right-arrow.svg"
              height="9"
              width="9"
              alt="right arrow"
            />
          </p>
        </div>
      </div>
      <div>
        <p className="text-white text-xs opacity-[56%] leading-3">
          Upgrade credit limit
        </p>
        <p className=" text-right cursor-pointer">
          <span className="text-white text-base leading-4 mr-[6px] text-shadow">
            ₹15,000
          </span>
          <Image
            src="/right-arrow.svg"
            height="9"
            width="9"
            alt="right arrow"
          />
        </p>
      </div>
    </div>
  );
};
