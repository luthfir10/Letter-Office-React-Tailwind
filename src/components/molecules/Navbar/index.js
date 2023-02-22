import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isExpended, setExpendedState }) => {
  return (
    <nav className=" top-0 w-full items-center rounded-lg border-b  dark:bg-gray-800 dark:border-gray-700">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center px-4">
            <button
              id="sidebar-menu"
              name="sidebar-menu"
              type="button"
              className={`block absolute left-4 lg:hidden
                ${isExpended ? "" : "hamburger-acive"}
              `}
              onClick={() => setExpendedState(!isExpended)}
            >
              <span className="hamburger-line bg-black transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line bg-black transition duration-300 ease-in-out"></span>
              <span className="hamburger-line bg-black transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
          <div className="px-4">
            <Link
              to="/logout"
              className="right-0 font-bold text-lg text-blue-300 block py-2"
            >
              Logout Icon
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
