import Image from "next/image";
import React from "react";

interface Props {
  dull?: boolean;
  warning?: boolean;
  amountText: string;
  title: string;
  margin?: boolean;
}

export const SummaryText = (props: Props) => {
  const {
    warning = false,
    dull = false,
    amountText,
    title,
    margin = true,
  } = props;
  return (
    <div
      className={`flex items-center justify-between text-sm ${
        margin ? "mb-4" : ""
      } ${warning ? "text-[#E33F37]" : "text-[#202020]"}`}
      style={{ opacity: `${dull ? "60%" : 1}` }}
    >
      <div className="flex items-center">
        <Image
          src={warning ? "/error.svg" : "/check.svg"}
          height="12"
          width="12"
          alt="correct"
        />
        <span className="  ml-[6px]">{title}</span>
      </div>
      <p className="text-right">{amountText}</p>
    </div>
  );
};
