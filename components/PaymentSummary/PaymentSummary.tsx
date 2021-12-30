import Image from "next/image";
import React from "react";
import InvoiceIcon from "../InvoiceIcon";
import { PaymentMethod } from "../PaymentMethod/PaymentMethod";
import { SummaryText } from "../SummaryText/SummaryText";

interface Props {}

export const PaymentSummary = (props: Props) => {
  return (
    <div className="bg-white rounded-xl drop-shadow-sm mb-6">
      <div className="pt-5 px-6">
        <div className="flex items-center justify-between mb-5">
          <p className=" text-base leading-5 text-[#888888]">Amount due</p>
          <div className="text-right text-[#202020]">
            <p className=" text-4xl leading-[45px] ">₹26,000</p>
            <p className=" text-xs">Due by April 20</p>
          </div>
        </div>
        <hr className="border-t border-[#ccc] border-dashed " />
      </div>
      <div className="bg-[#F7FFFD] pt-5 pb-3 px-6">
        <div className="flex items-center justify-between mb-4 opacity-[60%]">
          <p className="flex items-center">
            <InvoiceIcon />
            <span className=" text-sm ml-[5px] text-[#202020]">
              Bill Amount
            </span>
          </p>
          <p className=" text-sm ml-[5px] text-[#202020]">₹41,000</p>
        </div>
        <hr className="border-t border-[#ccc] border-solid mb-4 " />
        <SummaryText title="Paid on April 18" dull amountText="₹5,000" />
        <SummaryText title="Paid on April 19" amountText="2 &times; ₹5,000" />
        <SummaryText
          title="Autopay failed"
          warning
          amountText="5 &times; ₹5,000"
        />
        <SummaryText
          title="Autopay failed"
          warning
          amountText="₹1,000"
          margin={false}
        />
      </div>
      <PaymentMethod />
    </div>
  );
};
