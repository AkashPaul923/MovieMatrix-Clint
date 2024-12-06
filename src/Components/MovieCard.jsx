import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    const {poster, title, genre, year, rating, duration, summery, _id} = movie
  return (
    <div className="bg-base-200 p-8 rounded-xl">
      <figure className="">
        <img
          src={poster}
          alt={title}
          className="rounded-xl w-full max-h-[350px] object-cover"
        />
      </figure>
      <div className="space-y-3">
        <h2 className="text-center text-xl font-bold mt-3">{title}</h2>
        <div className="flex justify-between items-center">
            <p>{genre}</p>
            <p>Release: {year}</p>
        </div>
        <div className="flex justify-between items-center">
            <p>Duration: {duration} min</p>
            <p className="flex items-center"><span>{rating}</span> <FaStar/></p>
        </div>
        <div className="">
          <Link to={`/movies/${_id}`} className="btn btn-primary w-full">See details</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
