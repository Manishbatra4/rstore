import axios from "axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios.get(
        "http://localhost:7000/api/auth/signout",
        {
          withCredentials: true,
        }
      );

      return response;
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
