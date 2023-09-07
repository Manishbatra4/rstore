import React, { createContext, useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const apip = useAxiosPrivate();

  useEffect(() => {
    apip
      .get("/api/user/s")
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log("context error user", error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
