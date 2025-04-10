import React from "react";

const CustomFooter = () => {
  return (
    <footer className="bg-slate-800 w-full">
      <div className="row-span-2 flex flex-col md:flex-row gap-10 p-8 pt-14 text-white">
        <div className="-leading-0.5">
          <div>
            <p className="text-7xl leading-0.5">RO<span className="text-[#d10064]">T</span></p>
          </div>
          <div> 
            <p className="text-[12px]">Understand Bible verses with ease.</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:flex-row justify-evenly">
          <ul className="flex flex-col gap-4">
            <li className="text-xl pb-4 font-bold">Quick Links</li>
            <li>Features</li>
            <li>How It Works</li>
            <li>Contact Us</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="text-xl pb-4 font-bold">Legal</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="text-xl pb-4 font-bold">Connect</li>
            <li>Facebook</li>
            <li>X</li>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
      <div className="grid row-span-1 place-items-center border-t-[1px] text-white p-16 text-sm">
        © 2025 Bibley. All rights reserved.
      </div>
    </footer>
  );
};

export default CustomFooter;
