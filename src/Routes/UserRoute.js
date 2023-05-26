import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingLazy } from "../components";
import Home from "../pages/Home";
import Memorandum from "../pages/Memorandum";
import Externals from "../pages/Externals";

import MasterUser from "../pages/MasterUser";
import EditUser from "../pages/MasterUser/EditUser";

import Notfound from "../pages/404";

const LazyLayoutUser = React.lazy(() => import("../layout/UserLayout"));

const UserRoute = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <React.Suspense fallback={<LoadingLazy />}>
              <LazyLayoutUser />
            </React.Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="letter">
            <Route path="memo" element={<Memorandum />} />
            <Route path="external" element={<Externals />} />
            <Route path="*" element={<Notfound />} />
          </Route>
          <Route path="masteruser">
            <Route index element={<MasterUser />} />
            <Route path="edit/:uuid" element={<EditUser />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
};

export default UserRoute;
