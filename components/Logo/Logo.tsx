import React from "react";
import Link from "next/link";
import Image from "next/image";
import sitelogo from "../../public/logo.png";
type Props = {
  color?:string
};

export function Logo({color}: Props) {

  return (
    <div className="">
      <Link className="flex flex-row items-center gap" href="/">
        <Image src={sitelogo.src} alt="logo" width={50} height={20} />
        <h1 className="text-white font-extrabold hidden md:block text-2xl">BRANAVERSE</h1> 
      </Link>
    </div>
  );
}
