import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "../../context/User/UserContext";
import useLogout from "../../hooks/useLogout";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user } = useContext(UserContext);
  const logout = useLogout();
  const router = useRouter();
  const { auth } = useAuth();

  const signOut = async () => {
    await logout();
    localStorage.removeItem("isLogedIn");
    await router.push("/login");
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Random Store
          </span>
        </div>
        <div className="w-full block flex lg:flex lg:items-center lg:w-auto">
          {/* <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div> */}
          <div className="w-full justify-end flex flex-cols">
            {auth ? (
              <>
                <div>
                  <p className="inline-block text-lg px-4 py-2 leading-none text-white mt-4 lg:mt-0">
                    {user && user.name}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link
                    href="/login"
                    className="inline-block mr-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                  >
                    Sign In
                  </Link>
                </div>
                <div>
                  <Link
                    href="/register"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                  >
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
