import React from "react";
import { ConnectKitButton } from "connectkit";

function Header() {
  return (
    <div className="bg-gray-50 border-b ">
      <div className="container mx-auto">
        <div className="max-w-screen py-[20px] flex items-center justify-between">
          <span className="font-bold text-[30px] text-[#5135C9]">
          TokenTalk
          </span>
          <ConnectKitButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
