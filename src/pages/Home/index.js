import React from "react";
import useAuth from "../../services/hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();

  return (
    <div className="p-4 bg-transparent rounded-lg dark:border-gray-700 mt-14">
      Welcome Page Home {auth.roles + " " + auth.name}
    </div>
  );
};

export default Home;
