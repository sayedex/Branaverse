import React from 'react'
import { useAppSelector, useAppdispatch } from "../../../hooks/redux";
type Props = {}

export function Reffer({}: Props) {
  const { active, user, isauthenticateuser } = useAppSelector(
    (state) => state.userSlice
  );
  const origin  = `${process.env.NEXT_PUBLIC_VERCEL_URL}signup/${user?.userType}?referralCode=${user?.username}`;
  console.log(origin);
  
  return (
    <div className='bg-slate-800 text-white p-4 rounded-xl m-3' >

<div>
<p>{origin}</p>
</div>


    </div>
  )
}
