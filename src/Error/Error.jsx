import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-9 py-28">
            <p className="text-5xl font-bold">404</p>
            <p className="text-5xl font-bold">Data Not Found</p>
            <Link to="/" className="btn btn-outline">Go to Home</Link>
        </div>
    );
};

export default Error;