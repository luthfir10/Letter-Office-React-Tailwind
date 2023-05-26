import axios from "../../configs/api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios.delete("/logout");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return logout;
};

export default useLogout;
