import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../public/logo.png";
import { setManu } from '../../store/userSlice';
import { useAppdispatch,useAppSelector } from '../../hooks/redux';
import { Logo as Logocomponent } from '../Logo/Logo';


type Props = {}

export function Dashboardheader({}: Props) {
    const {manu} = useAppSelector((state)=>state.userSlice);
    const dispath = useAppdispatch();
 const EnableManu = ()=>{
    dispath(setManu(manu))
 }

  return (
    <header className='bg-white dark:bg-[rgba(25,28,31,0.75)] bg-opacity-[75%] border-b dark:border-secondary-dark transform backdrop-blur-md text-black dark:text-white z-[12] sticky top-[0px] w-full h-[80px] px-6 md:px-10 flex items-center justify-between'>
 
 
<Logocomponent/>
 
 <div className="">
          <GiHamburgerMenu
            onClick={()=>EnableManu()}
            className="block md:hidden h-6 w-6 hover:text-gray-700 "
            aria-hidden="true"
          />
        </div>



    </header>
  )
}

