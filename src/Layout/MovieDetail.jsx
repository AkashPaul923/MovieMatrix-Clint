import { useLoaderData } from "react-router-dom";


const MovieDetail = () => {
    const movie = useLoaderData()
    console.log(movie);
    return (
        <div>
            movie detail
        </div>
    );
};

export default MovieDetail;