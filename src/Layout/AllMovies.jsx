import { useLoaderData } from "react-router-dom";
import MovieCard from "../Components/MovieCard";


const AllMovies = () => {
    const movies = useLoaderData()
    // console.log(movies);
    return (
        <div className="px-5 lg:px-0 my-20">
            <p className="text-center text-3xl font-bold mb-8">All Movies ({movies.length})</p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {
                    movies.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;