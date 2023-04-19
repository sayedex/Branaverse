import React from "react";

type Props = {
  name:string,
  value:number,
  symbol?:string
};

export function Box({name,value,symbol}: Props) {
  return (
    <div className="bg-[#10046D] min-w-[300px] text-white px-5 py-10 rounded-xl flex flex-col gap-y-5">
      {/* icon and text */}
      <div>
        <p className="text-lg">{name}</p>
      </div>

      {/* amount */}
      <div>
        <h1 className="text-3xl text-center">{value} {symbol}</h1>
      </div>
    </div>
  );
}
