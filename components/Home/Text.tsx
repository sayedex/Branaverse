import React,{useState,useEffect} from 'react'
import Icon from "../../public/Home/arrowIcon.png"
import Image from 'next/image';
import {Signup} from './Signup';
import newRequest from "../../utils/Axiosapi";
export function Text() {
  const [countuser, setcountuser] = useState({
    buyers: 0,
    freelancers: 0,
  });
  //call to backend .. to get user info
  const getInfo = async () => {
    try {
      const response = await newRequest.get("/info/totaluser");
      setcountuser(response.data.data);
    } catch (err: any) {
      console.log(err);
    }
  };


  ///render onload....
  useEffect(() => {
    let render = false;
    if (!render) {
      getInfo();
    }
    return () => {
      render = true;
    };
  }, []);
  return (
    <div className='flex flex-col gap-y-5'>
<h1 className='text-6xl font-extrabold '>
Web3 Freelancer<br/>
Platform
</h1>
<p className='text-2xl max-w-xl tracking-[1px]'>Web3 freelancing with crypto payments.
Join the decentralized workforce today.</p>


<div className='flex flex-row gap-x-3 items-center'>
<Image src={Icon.src} alt="Icon" width={40} height={40} />
<h1 className='text-xl font-extrabold'>SIGN UP AS A</h1>
</div> 
<Signup countuser={countuser}/>
    </div>
  )
}

