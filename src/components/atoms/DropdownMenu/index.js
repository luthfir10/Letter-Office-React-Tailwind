import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Dropdownmenu = ({ icon, title, children }) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  return (
    <div className="w-full">
      <div
        onClick={() => setDropdownMenu(!dropdownMenu)}
        className={`flex p-2 h-11 w-full no-underline uppercase mx-auto mt-1 rounded-md relative hover:bg-opacity-20 hover:bg-white hover:transition-colors hover:duration-300 hover:cursor-pointer ${
          dropdownMenu ? "bg-opacity-20 bg-white transition-colors" : ""
        }`}
      >
        <div className="w-10 text-2xl pt-0 pr-2">{icon}</div>
        <span className="text-sm">{title}</span>
        <span
          className={`text-lg ml-[50%] lg:ml-[55%] md:ml-[55%] ${
            dropdownMenu ? "rotate-90 duration-300 pt-2" : "duration-300"
          }`}
          id="arrow"
        >
          <MdKeyboardArrowRight />
        </span>
      </div>
      <div
        className={`w-full duration-300 ${
          dropdownMenu ? "duration-300" : "relative hidden "
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdownmenu;
