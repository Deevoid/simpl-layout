import Image from "next/image";
import React from "react";

interface Props {}

const merchants = [
  {
    name: "Zomato",
    src: "/zomato.svg",
    bg: "#FFF6F6",
    border: "#FFE8E8",
  },
  {
    name: "Dunzo",
    src: "/dunzo.svg",
    bg: "#F8FFFA",
    border: "#DEF9E5",
  },
  {
    name: "Big Basket",
    src: "/bb.svg",
    bg: "#FAFFEE",
    border: "#F5FFDC",
  },
  {
    name: "Grofers",
    src: "/grofers.svg",
    bg: "#FFF4F0",
    border: "#FFE8DF",
  },
  {
    name: "Test",
    src: "/zomato.svg",
    bg: "#F4F9FF",
    border: "#FFE8DF",
  },
];

export const MerchantSlider = (props: Props) => {
  return (
    <div className="bg-white rounded-xl drop-shadow-sm pt-4 pb-5 mb-6">
      <p className="text-[#A8AFB8] text-xs mb-4 px-6">
        Use Simpl on 4500+ merchants
      </p>
      <div className="flex items-center flex-nowrap overflow-x-auto gap-[5px] pl-6 scroll-pl-6 snap-x snap-mandatory pr-6">
        {merchants.map((merchant) => (
          <div
            key={merchant.name}
            title={merchant.name}
            className="h-[80px] w-[62px] rounded-[14px] flex-shrink-0 flex items-center justify-center flex-col gap-[5px] snap-start"
            style={{
              background: `${merchant.bg}`,
              border: `.5px solid ${merchant.border}`,
            }}
          >
            <div className=" h-[42px] w-[42px] rounded-full overflow-hidden">
              <Image
                src={merchant.src}
                height="42"
                width="42"
                alt={merchant.name}
              />
            </div>
            <p className="text-[10px] font-semibold text-center">
              {merchant.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
