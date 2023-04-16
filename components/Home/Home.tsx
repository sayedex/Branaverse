import React, { useEffect, useState } from "react";
import { Text } from "./Text";
import Vector from "../../public/Home/vetor.png";

export const Home = () => {


  return (
    <div className="flex items-center gap-12 flex-col-reverse lg:flex-row justify-center px-5 pb-10  bg-gradient-to-b from-purple-100 to-blue-100 md:h-screen">
      <Text />

      <div>
        <img
          className="w-11/12 p-7 md:p-0	m-auto md:max-w-xl"
          src={Vector.src}
          alt="vector "
        />
      </div>
    </div>
  );
};
