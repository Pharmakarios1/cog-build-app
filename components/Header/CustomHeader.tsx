"use client";
//next/react library imports
import { useState } from "react";


//imports of third parties components
import { BellOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button,Drawer,DrawerProps } from "antd";


//customs components imports
import Navigation from "./_partials/Desktop/Navigation";
import MobileNav from "./_partials/Mobile/MobileDrawer";

const CustomHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDrawerVisible, setDrawerVisible] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex justify-between items-center h-16 bg-white z-10 sticky top-0 left-0 right-0  shadow-[0px_1px_6px_0px_#00000080] px-4 sm:px-16 border-b border-gray-200">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-base md:text-xl text-slate-500 font-semibold">
          Rays of <span className="text-[#d10064]">Truth</span>
        </h1>
        <p className="text-[6px] md:text-[7px] text-[#d10064]">
          Thy Word is Truth...John 17:17
        </p>
      </div>
      <div className="">
        <Navigation />
      </div>

      <div className=" md:hidden">
        <Button
          icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          type="text"
          className=""
          onClick={() => setDrawerVisible(true)}
        ></Button>
        <MobileNav visible={isDrawerVisible} onClose={() => setDrawerVisible(false)}/>
      </div>
    </header>
  );
};

export default CustomHeader;
