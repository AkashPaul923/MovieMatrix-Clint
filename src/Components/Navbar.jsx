import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Theme from "./Theme";
import { toast } from "react-toastify";


const Navbar = () => {
  const links = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allmovies">All Movies</NavLink></li>
      <li><NavLink to="/addmovies">Add Movies</NavLink></li>
      <li><NavLink to="/myfavorites">My Favorites</NavLink></li>
      <li><NavLink to="/contact">Contact Us</NavLink></li>
  </>
  const { user, handleSignOut, loader } = useContext( AuthContext )

  const handleLogOut = () =>{
    handleSignOut()
    .then(res =>{
        toast.success("Successfully Logout")
    })
   }
  return (
    <div className="bg-base-300">
      <div className="navbar max-w-screen-2xl mx-auto">
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
          <p className="text-base md:text-2xl mr-5 font-bold">MovieMatrix</p>
          <Theme></Theme>
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
                <div className="tooltip hover:tooltip-open tooltip-left" data-tip={user.displayName}>
                  <img className="h-10 w-10 rounded-full object-cover" src={user.photoURL} alt="" />
                </div>
                
              </div>
          }
          {
            loader? "" :
            user ? 
            <div><button onClick={handleLogOut} className="btn ml-3 btn-accent">Logout</button></div>
            :
            <div>
              <Link to="/auth/login" className="btn btn-accent">Login</Link>
              <Link to="/auth/register" className="btn ml-3 btn-outline btn-accent">Register</Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
