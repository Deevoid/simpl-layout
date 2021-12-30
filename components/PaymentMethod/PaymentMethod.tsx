import Image from "next/image";
import React from "react";

interface Props {}

export const PaymentMethod = (props: Props) => {
  return (
    <div className="px-6 py-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div className="flex items-center justify-center h-[26px] w-[26px] bg-[#F6F6F6] rounded-full">
            <Image
              src="/paytm.svg"
              height="7"
              width="21"
              quality={1}
              alt="paytm"
            />
          </div>
          <span className=" text-lg leading-3 ml-[7px]">PayTM</span>
        </div>
        <span className=" font-semibold text-xs cursor-pointer">Change</span>
      </div>
      <button
        type="button"
        className="bg-primary w-full rounded-[4px] text-[15px] font-semibold text-white py-[11px] flex items-center justify-center hover:bg-teal-500 transition-all"
      >
        PAY NOW
      </button>
    </div>
  );
};
