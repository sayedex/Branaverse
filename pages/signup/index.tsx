import React,{useEffect} from 'react'
import { Signupform } from '../../components/Signup/Signupform';
import { useRouter } from 'next/router';
import {useAppSelector,useAppdispatch} from "../../hooks/redux"
import { Loginstaticcomponent } from "../../components/Login/Loginstaticcomponent";
type Props = {}

const UsesignUp = (props: Props) => {
const router = useRouter();
const path = router.query;
const {active,user,isauthenticateuser}  = useAppSelector((state)=>state.userSlice);
useEffect(() => {
  if (isauthenticateuser) {
    router.push("/me");
  }
}, [isauthenticateuser]);


console.log(router);

  return (
<div className='bgcolor md:h-screen'>
<div className=' items-center grid grid-cols-1 md:grid-cols-2 gap-x-10  max-h-max	md:h-[80vh] p-5  max-w-7xl m-auto'>
      <Loginstaticcomponent/>
    <div>
    <div className='flex flex-col mt-10'>
        <h1 className='text-2xl font-extrabold'>Create Your Account Here</h1>
        <p className='text-lg pt-2'>Before continue, please Sign Up first to join with us</p>
       </div>
        <Signupform query={path}/>
    </div>
    </div>
</div>
  )
}

export default UsesignUp