import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-7xl text-red-600">Home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;