import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";

interface Props {}

export const Header = (props: Props) => {
  return (
    <header className=" mb-[23px]">
      <UserInfo />
    </header>
  );
};
