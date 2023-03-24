import { useConnect } from 'wagmi';
import isMount from "../../hooks/walletstate";
import { useTheme } from "next-themes" 
import { ExampleButton } from './connect';
import {Popover, Transition} from '@headlessui/react'
import logo from "../../public/logo.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState ,useEffect} from 'react';
import Link from 'next/link';
export function Header() {
    const { theme, setTheme } = useTheme(); 
    const [isMounted, setIsMounted] = useState(false);

 const {isRender}=  isMount();
 const Header = [
    {
        id: 0,
        name: "Home",
        link: "/",
        islink:true,
    }, {
        id: 0,
        name: "info",
        link: "/info",
        islink:true,
    }, {
        id: 0,
        name: "Buy",
        link: "https://pancakeswap.finance/swap?outputCurrency=0x7e8db69dcff9209e486a100e611b0af300c3374e",
        islink:false,
    },
    {
        id: 0,
        name: "Bscscan",
        link: "https://bscscan.com/address/0x7e8db69dcff9209e486a100e611b0af300c3374e",
        islink:false,
    },

]


useEffect(() => {
    setIsMounted(true);
  }, []);
  const ChangeToDarkMood = ()=>{
    if (isMounted) {
        setTheme(theme === "light" ? "dark" : "light");
      }
  }












 return (
<Popover className="w-full  border-b  dark:border-secondary-dark">
          
        </Popover>
 )
}
