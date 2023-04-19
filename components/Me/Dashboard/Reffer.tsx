import React from 'react'
import { useAppSelector, useAppdispatch } from "../../../hooks/redux";
type Props = {}

export function Reffer({}: Props) {
  const { active, user, isauthenticateuser } = useAppSelector(
    (state) => state.userSlice
  );
  const origin  = `${process.env.NEXT_PUBLIC_VERCEL_URL}?referralCode=${user?.username}`;

  
  return (
    <div className='bg-[#10046D] text-white p-4 rounded-xl m-3' >

<div>
<p>{origin}</p>
</div>


    </div>
  )
}
