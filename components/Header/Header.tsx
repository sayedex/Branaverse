import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Logo as Logocomponent } from "../Logo/Logo";

export const Header = () => {
  return (
    <div className="bg-white dark:bg-[rgba(25,28,31,0.75)]  bg-opacity-[75%] border-b dark:border-secondary-dark transform backdrop-blur-md text-black dark:text-white z-50 sticky top-[0px] w-full h-[80px] px-1 md:px-10 flex items-center justify-between ">
      <div className="flex flex-row w-full flex-wrap items-center px-3 justify-between min-h-[70px] py-8">
        {/* image and logo */}
      <Logocomponent/>
        {/* image and logo */}

        {/* login button */}

        <div>
            {" "}
            <Link className="hover:bg-cyan-700 bg-cyan-800 text-white px-10 py-2 rounded-3xl text-xl" href="/login">Log in</Link>
    
        </div>
        {/* login button */}
      </div>
    </div>
  );
};
