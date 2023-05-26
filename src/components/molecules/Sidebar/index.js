import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bgeoffice from "../../../assets/img/bg-eoffice.jpg";
import logocp from "../../../assets/img/logo_instansi.png";
import {
  MdOutlineDashboard,
  MdOutlineLogout,
  MdMailOutline,
  MdPeopleOutline,
} from "react-icons/md";
import { Dropdownmenu } from "../../atoms";
import useLogout from "../../../services/hooks/useLogout";
const Sidebar = ({ isExpended, setExpendedState }) => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/");
  };
  return (
    <>
      <aside
        id="sidebar-menu"
        className={`fixed z-50 top-0 left-0 w-64 md:w-72 lg:w-[277px] bg-cover bg-neutral-600 bg-blend-multiply  h-screen pt-0 transition-transform -translate-x-full  shadow-xl shadow-gray-800 lg:translate-x-0
        ${
          isExpended
            ? ""
            : "fixed top-0 left-0  w-64 bg-cover h-screen pt-0 translate-x-0"
        }
      `}
        aria-label="sidebar"
        style={{
          backgroundImage: `url(${bgeoffice})`,
        }}
      >
        <div className="h-full text-white px-1 pb-4  overflow-y-auto rounded-r-xl">
          <div className="mt-5 px-2 w-full">
            <div className="w-1/2 top-0 left-0">
              <img src={logocp} alt="Logo Instansi" />
            </div>

            <button
              id="sidebar-menu"
              name="sidebar-menu"
              type="button"
              className={`block absolute right-2 top-2 lg:hidden
                ${isExpended ? "" : "hamburger-acive"}
              `}
              onClick={() => setExpendedState(!isExpended)}
            >
              <span className="hamburger-line bg-white transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line bg-white transition duration-300 ease-in-out"></span>
              <span className="hamburger-line bg-white transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
          <div className="grid grid-rows-1 mt-10 text-white">
            <Link
              to="/spde"
              className="flex p-2 h-11 w-full no-underline uppercase mx-auto mt-1 rounded-md relative hover:bg-opacity-20 hover:bg-white hover:transition-colors hover:duration-300 hover:cursor-pointer"
            >
              <div className="w-10 text-2xl pt-0 pr-2">
                <MdOutlineDashboard />
              </div>
              <span className="text-sm">Dashboard</span>
            </Link>

            <Dropdownmenu icon={<MdMailOutline />} title="Letter">
              <Link
                to="letter/external"
                className=" duration-300 text-sm block p-3 pl-14 h-11 w-full no-underline uppercase mt-1 rounded-md relative hover:bg-opacity-20 hover:bg-white hover:transition-colors hover:duration-300 hover:cursor-pointer"
              >
                Outgoing Letter
              </Link>
              <Link
                to="letter/memo"
                className="duration-300 text-sm block p-3 pl-14 h-11 w-full no-underline uppercase mt-1 rounded-md relative hover:bg-opacity-20 hover:bg-white hover:transition-colors hover:duration-300 hover:cursor-pointer"
              >
                Memorandum
              </Link>
            </Dropdownmenu>

            <Link
              to="masteruser"
              className="flex p-2 h-11 w-full no-underline uppercase mx-auto mt-1 rounded-md relative hover:bg-opacity-20 hover:bg-white hover:transition-colors hover:duration-300 hover:cursor-pointer"
            >
              <div className="w-10 text-2xl pt-0 pr-2">
                <MdPeopleOutline />
              </div>
              <span className="text-sm">Master User</span>
            </Link>
            <button
              onClick={signOut}
              className="flex p-2 h-11 w-full no-underline uppercase mx-auto mt-1 rounded-md relative hover:bg-opacity-20 hover:bg-white hover:transition-colors hover:duration-300 hover:cursor-pointer"
            >
              <div className="w-10 text-2xl pt-0 pr-2">
                <MdOutlineLogout />
              </div>
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </aside>
      {!isExpended && (
        <div
          onClick={() => setExpendedState(!isExpended)}
          className="lg:hidden opacity-25 fixed inset-0 z-40 w-full h-full bg-black"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
