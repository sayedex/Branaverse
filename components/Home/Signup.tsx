import React from 'react'
import Link from 'next/link'

export const Signup = (countuser:any) => {
  return (
    <div>
    <div className='grid grid-cols-2 grid-row-2 gap-5'>

  {/* freelancer btn    */}
  <Link className='w-full hover:bg-cyan-700 text-center text-white h-[45px] px-8 text-2xl py-2 rounded-3xl bg-cyan-800' href="signup/freeelancer">

Freelance

</Link>
  {/* freelancer btn    */}

  {/* clint btn */}
  <Link className='w-full hover:bg-cyan-700 text-center text-white h-[45px] px-8 text-2xl py-2 rounded-3xl bg-cyan-800' href="/signup/buyer">
Client

</Link>

<div className='flex flex-col gap-1'>
    <h1 className='text-2xl font-extrabold'>{countuser.countuser.freelancers}+</h1>
    <span className='text-lg tracking-[1px]'>Freelance</span>
</div>

<div className='flex flex-col gap-1'>
<h1 className='text-2xl font-extrabold'>{countuser.countuser.buyers}+</h1>
    <span className='text-lg tracking-[1px]'>Client</span>
</div>

  {/* clint btn */}
    </div>

</div>
  )
}
