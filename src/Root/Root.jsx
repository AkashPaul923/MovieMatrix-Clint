import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


const Root = () => {

    const location = useLocation()
    useEffect(()=>{
        const routeTitles = {
            "/" : "MovieMatrix||Home",
            "/allmovies" : "MovieMatrix||All-Movies",
            "/contact" : "MovieMatrix||Contact-Us",
            "/addmovies" : "MovieMatrix ||Add-Movies",
            // "/updatemovies/?:id" : "MovieMatrix ||Update-Movies",
            "/myfavorites" : "MovieMatrix||My-Favorites",
            "/auth/login" : "MovieMatrix||Login",
            "/auth/register" : "MovieMatrix||Register",
            "/auth/resetpassword" : "MovieMatrix || Password-Reset",
        }
        const title = routeTitles[location.pathname] || "Eco-Adventure||Movie-Detail"
        document.title = title
    },[location])
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-[70px]"></div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;