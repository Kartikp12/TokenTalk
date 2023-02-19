import React from "react";
import { ConnectKitButton } from "connectkit";
import Image from "next/image";

import logo from "../assets/logo.svg"

function Header() {
  return (
    <div className="bg-gray-50 border-b ">
      <div className="container mx-auto">
        <div className="max-w-screen py-[20px] flex items-center justify-between">
          <div className="flex items-center space-x-[10px]">
            <Image height={40} width={40} src={logo} alt="" />
            <p className="font-semibold text-[25px] ">
              <span className="text-[#C44590]">Token</span>
              <span>Talk</span>
            </p>
          </div>
          <ConnectKitButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
