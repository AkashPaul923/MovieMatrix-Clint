import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";


const Navbar = () => {
  const links = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allmovies">All Movies</NavLink></li>
      <li><NavLink to="/addmovies">Add Movies</NavLink></li>
      <li><NavLink to="/myfavorites">My Favorites</NavLink></li>
  </>
  const { user } = useContext( AuthContext )
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {
                links
              }
            </ul>
          </div>
          <p className="text-xl">MovieMatrix</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user && <div className="flex justify-center items-center gap-2">
                <p>{user.displayName}</p>
                <img className="h-10 w-10 rounded-full object-cover" src={user.photoURL} alt="" />
              </div>
          }
          {
            user ? 
            <div><button className="btn">LogOut</button></div>
            :
            <div>
              <Link to="/auth/login" className="btn">Login</Link>
              <Link to="/auth/register" className="btn">Register</Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
