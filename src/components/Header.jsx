import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  // console.log(user)
  const handleLogout = () => {
    logout()
      .then(() => console.log("log out success"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl md:block hidden">
          Burj-al-Arab
        </a>
      </div>
      <div className="flex-grow">
        <ul className="flex text-base font-semibold gap-2 md:gap-6 text-gray-500">
          <Link to="/">Home</Link>
          <Link to="/book">Book</Link>
          {user && <Link className="text-error" to="/book">{user.email}</Link>}
          {user ? (
            <button onClick={handleLogout} className="btn btn-error btn-xs text-white">
              Sign out
            </button>
          ) : (
            <>
              {" "}
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
