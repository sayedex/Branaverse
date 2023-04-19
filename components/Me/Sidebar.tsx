import React, { useState ,useEffect} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { Logo } from "../Logo/Logo";
import sitelogo from "../../public/logo.png";
import Image from "next/image";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { Logout } from "../../Reduxhelper/usercall";
import { useAppdispatch, useAppSelector } from "../../hooks/redux";
import { Manu } from "../../config/manu";
import Link from "next/link";
import { useRouter } from "next/router";
export function Sidebar() {
  const router = useRouter();
  //  const [open,setopen] = useState(true);
  const { manu } = useAppSelector((state) => state.userSlice);
  const dispath = useAppdispatch();

  //const logout =>
  const logout = async()=>{
   await dispath(Logout());
   router.push("/");
  }
 

  return (
    <div
      className={`${manu ? "flex-shrink-0 " : "flex-shrink-0 "} md:w-[320px] `}
    >
      <div
        className={`p-6  ${
          manu ? "left-0" : "-left-[320px] md:left-0"
        }  w-[320px] h-screen bg-white z-20 fixed top-0  lg:left-0   peer-focus:left-0 peer:transition ease-out delay-150 duration-200`}
      >
        <div className=" flex flex-col justify-start item-center h-full">
        <Link className="flex flex-row items-center gap" href="/">
        <Image src={sitelogo.src} alt="logo" width={50} height={20} />
        <h1 className="text-[#10046D] font-extrabold hidden md:block text-2xl">BRANAVERSE</h1> 
      </Link>

          <div className="pt-10 my-4 border-b border-gray-100 pb-4">
            <Link href="/me">
            <div className="sidemanu group globalTextcolor  ">
              <MdOutlineSpaceDashboard className="sidebaricon" />
              <h3 className="sidebartext   ">
                Dashboard
              </h3>
            </div>
            </Link>
          </div>

          {/* Profile  */}
          <div className="globalTextcolor my-4 border-b border-gray-100 pb-4 flex-1">
            <h1 className="pb-3">Manage Profile</h1>
            {Manu.map((data, index) => {
              return (<Link key={index} href={data.link}>
                <div className="sidemanu group globalTextcolor">
                  <data.icon className="sidebaricon" />
                  <h3 className="sidebartext">
                    {data.name}
                  </h3>
                </div>
                </Link>
              );
            })}
          </div>

          {/* logout */}
          <div className=" my-4">
            <div onClick={()=>logout()} className="sidemanu group globalTextcolor">
              <MdOutlineLogout className="sidebaricon" />
              <h3 className="sidebartext ">
                Logout
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
