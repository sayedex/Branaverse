import React,{useEffect} from 'react'
import { Sidebar } from '../../components/Me/Sidebar'
import { Box } from '../../components/Me/Dashboard/Box'
import { Reffer } from '../../components/Me/Dashboard/Reffer';
import { Dashboardheader } from '../../components/Header/Dashboardheader';
import { useAppSelector } from '../../hooks/redux';
import { useRouter } from 'next/router';
const Main = () => {
  const router   = useRouter()
  const {user,isauthenticateuser}= useAppSelector((state)=>state.userSlice);
  //total reffer by user....
  const totalreffewr = user?.refId.length;
  const reward = totalreffewr?totalreffewr*0.01:0;



  useEffect(() => {
    if (!isauthenticateuser) {
      router.push("/login");
    }
  }, []);


  return (



<div className='main_cotent bgcolor'>

<Sidebar/>



<div className='relative  flex-1 z-10 sm:px-2 md:px-5 md:items-start pb-20 '>
  {/* text */}
<h1 className='text-3xl p-3'>Dashboard</h1>
<Reffer/>

{/* all box */}
<div className='flex p-3 flex-wrap justify-center gap-4 w-full mt-5'>
<Box
name='Current balance'
value={0}
symbol="USDT"
/>
<Box
name='Total Earned'
value={reward}
symbol="USDT"
/>
<Box
name='Total Withdraw'
value={0}
symbol="USDT"
/>
<Box
name='Total referred'
value={totalreffewr?totalreffewr:0}
/>
</div>
</div>



   </div>

  )
}

export default Main