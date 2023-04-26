import React from "react";
import { HiOutlineBell, HiOutlineShoppingCart } from "react-icons/hi";

import logo from "../../../assets/img/logo_avatown_manual_1_basi_inverse.png";
import Search from "../../Search/Search";
import Button from "../../Button/Button";
import person from "../../../assets/img/person.png";

const Header = () => {
  return (
    <div className="h-[57px] w-[1280px] flex justify-between items-center px-2 bg-gradient-to-r from-[#391c84] to-[#801f8b]">
      <div className="flex items-center gap-14 mt-2">
        <img src={logo} alt="logo" className="h-12" />
        <a
          href="/"
          className="underline font-medium text-[22px] underline-offset-[5px] text-white"
        >
          Go to Marketpage
        </a>
      </div>
      <div className="flex gap-4 items-center pr-2">
        <Search className="w-[411px] h-[29px]" />
        <div className="h-[36px] mt-2 w-[40px] relative rounded-lg bg-[#34353a]">
          <Button
            onClick={() => {}}
            className="h-[36px] w-[40px] flex items-center justify-center"
          >
            <HiOutlineBell className="text-xl text-white" />
          </Button>
          <span className="h-4 w-4 text-center text-white top-[-8px] right-[-4px] rounded-full absolute bg-[#F84F4F] text-xs">
            3
          </span>
        </div>
        <div className="h-[36px] mt-2 w-[40px] relative rounded-lg bg-[#34353a]">
          <Button
            onClick={() => {}}
            className="h-[36px] w-[40px] flex items-center justify-center"
          >
            <HiOutlineShoppingCart className="text-xl text-white" />
          </Button>
          <span className="h-4 w-4 text-center text-white top-[-8px] right-[-4px] rounded-full absolute bg-[#F84F4F] text-xs">
            1
          </span>
        </div>
        <div className="h-[36px] mt-2 w-[36px] relative rounded-lg bg-[#fefefe]">
          <Button
            onClick={() => {}}
            className="h-[36px] w-[40px] flex items-center justify-center"
          >
            <img src={person} alt="user" className="h-[32px] w-auto" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
