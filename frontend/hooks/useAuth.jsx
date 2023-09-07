import { useContext } from "react";
import { AuthContext } from "../context/Auth/authContext";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
