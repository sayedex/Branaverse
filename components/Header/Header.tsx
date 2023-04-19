import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Logo as Logocomponent } from "../Logo/Logo";
import { useAppSelector } from "../../hooks/redux";
export const Header = () => {
  const { isauthenticateuser } = useAppSelector((state) => state.userSlice);
  return (
    <div className="bg-[#10046D]  border-b dark:border-secondary-dark transform backdrop-blur-md py-11 text-black dark:text-white z-50 sticky top-[0px] w-full h-[80px] px-1 md:px-14 flex items-center justify-between ">
      <div className="flex flex-row w-full flex-wrap items-center px-3 justify-between min-h-[70px] py-10">
        {/* image and logo */}
        <Logocomponent />
        {/* image and logo */}

        {/* login button */}

        <div>
          {isauthenticateuser ? (
            <Link
              className=" bg-white text-[#24006e] px-10 py-2 rounded-3xl text-xl"
              href="/me"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              className=" bg-white text-[#24006e] px-10 py-2 rounded-3xl text-xl"
              href="/login"
            >
              Log in
            </Link>
          )}
        </div>
        {/* login button */}
      </div>
    </div>
  );
};
