import React from "react";
import Image from "next/image";
import GetStarted from "./_partials/GetStarted";
import CustomMain from "../CustomMain";

const Hero = () => {
  const styleImage = {
    className: "h-auto sm:h-[400px] md:h-[550px]",
  };
  return (
     <div className="w-full grid grid-cols-1 place-items-center lg:grid-cols-2 gap-8 lg:gap-0">
     <GetStarted/>
      <div className="">
        <Image
          src={`/jpg/heroSection.jpg`}
          alt=""
          width={`1200`}
          height={`300`}
          className={`${styleImage.className}`}
          />
      </div>
     </div>
    
  );
};

export default Hero;
