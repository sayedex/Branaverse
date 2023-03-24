import React, { useState, forwardRef, useImperativeHandle,useEffect } from 'react';
import Popup from 'reactjs-popup';
import {useAppdispatch} from "../../hooks/redux"
import { CalculatorIcon ,XMarkIcon} from '@heroicons/react/24/outline';
import { pools } from '../../typeing';
import { useSendtrsansation } from '../../hooks/pool/useSendtrsansation';
import { useAccount } from 'wagmi';

type Props = {
  pool:pools,
}
export const StakeWindrow = forwardRef(({pool}:Props,ref: any) => {
  const {address} = useAccount();
    //costom hook for stake fund...
    const dispatch = useAppdispatch();
    const [value,setvalue] = useState("1")
    const [open, setOpen] = useState(false);
    const {writeAsync:StakeToken,isLoading,isError,isFetching,writeLoading,status} = useSendtrsansation(pool,dispatch,"deposit",value?value:"1","deposit",address)
    const handleChange = ()=>{
     
      
    }

    
    useImperativeHandle(ref, () => {
      return {
        openPopup: () => setOpen(true),
        closePopup: () => setOpen(false),
        value
      };
    });
  

     const closeModal = () =>{
        setOpen(false);
     }


     useEffect(()=>{
      if(status=="success"){
        setOpen(false);
      }
      },[status])
      



    return (
      <div>
        <Popup open={open}  className="rounded-lg bg-red-400"  onClose={closeModal}>
          <div className="modal rounded-lg">

{/* header */}
<div className='flex flex-row bg-[#eeeeee] dark:bg-[#2c2c2c] justify-between rounded-t-[19px] px-4 py-4 border-b mb-4'>

<div className='text-lg font-semibold'>
Stake
</div>

<div className='relative  h-fit'>
    <XMarkIcon onClick={()=>setOpen(o => !o)} className="text-gray-900 hover:text-gray-500 font-semibold dark:text-white cursor-pointer relative" width={22} height={22}/>
</div>

</div>

{/* header */}

{/* input field */}
<div className='px-4'>
<div className='flex flex-row border rounded-lg items-center '>
<input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}  id="first_name" className="bg-transparent  outline-none
 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
  focus:border-blue-500 block w-full p-2.5 mr-2
   dark:placeholder-gray-400 appearance-none " placeholder="Stake" />
<span className='pr-3 font-semibold'>TRDC</span>

</div>
{/* balance  */}
<div>
<span className='text-sm text-gray-400 font-normal'>Balances : {Math.floor(pool.stakeTokenBalance?pool.stakeTokenBalance:0)}</span>

</div>

{/* balance  */}
</div>

{/* input field */}

            

{/* confirm button */}

<div className='px-4'>
<button  disabled={writeLoading} onClick={() => StakeToken?.()} className='px-4 py-2 mb-3 mt-3 border w-full rounded-2xl text-lg font-semibold bg-[#e8ae00] dark:bg-white dark:text-black text-white whitespace-nowrap'>
   {isLoading?"Staking..": "Stake"}
    </button>   

</div>


{/* confirm button */}





           </div>
        </Popup>
      </div>
    );
    
    

    })

    StakeWindrow.displayName = 'StakeWindrow';
