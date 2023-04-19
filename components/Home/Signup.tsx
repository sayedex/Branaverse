import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export const Signup = (countuser: any) => {
  const Route = useRouter();
  const refferLink = Route.query.referralCode;
  const RFreelancer = refferLink
    ? `/signup?userType=freelancer&referralCode=${refferLink}`
    : "";
  const RBuyer = refferLink
    ? `/signup?userType=buyer&referralCode=${refferLink}`
    : "";




  return (
    <div>
      <div className="grid grid-cols-2 grid-row-2 gap-5">
        {/* freelancer btn    */}
        <Link
          className="w-full hover:bg-[#140336] bg-[#10046D] text-center text-white h-[45px] px-8 text-2xl py-2 rounded-3xl "
          href={refferLink ? RFreelancer : "/signup?userType=freelancer"}
        >
          Freelance
        </Link>
        {/* freelancer btn    */}

        {/* clint btn */}
        <Link
          className="w-full v text-center text-white h-[45px] px-8 text-2xl py-2 rounded-3xl hover:bg-[#140336] bg-[#10046D]"
          href={refferLink ? RBuyer : "/signup?userType=buyer"}
        >
          Client
        </Link>

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-extrabold">
            {countuser.countuser.freelancers}+
          </h1>
          <span className="text-lg tracking-[1px]">Freelance</span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-extrabold">
            {countuser.countuser.buyers}+
          </h1>
          <span className="text-lg tracking-[1px]">Client</span>
        </div>

        {/* clint btn */}
      </div>
    </div>
  );
};
