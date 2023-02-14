import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../../components/molecules";

const UserLayout = () => {
  const [isExpended, setExpendedState] = useState(true);
  return (
    <React.Fragment>
      <Sidebar isExpended={isExpended} setExpendedState={setExpendedState} />
      <div className="p-4 top-0 lg:ml-72">
        <Navbar isExpended={isExpended} setExpendedState={setExpendedState} />
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default UserLayout;
