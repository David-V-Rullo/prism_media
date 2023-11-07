import React from "react";
import Image from "next/image";

function HeaderBar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start px-5 w-1/2">
        <Image
          src="/prismlogo.png"
          width={200}
          height={200}
          className="hidden md:block"
          alt="Company Logo"
        />
      </div>
      <div className="flex flex-row justify-around w-1/2 center">
        <div className="px-4 py-2 hover:bg-blue-500 hover:text-white hover:scale-120 transition duration-150 ease-in-out">
          My Account
        </div>
        <div className="border-r border-gray-300"></div>
        <div className="px-4 py-2 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-150 ease-in-out">
          Out of Home
        </div>
        <div className="border-r border-gray-300"></div>
        <div className="px-4 py-2 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-150 ease-in-out">
          Digital
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
