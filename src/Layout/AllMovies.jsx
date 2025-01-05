import { useLoaderData } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import { useEffect, useState } from "react";

const AllMovies = () => {
  const data = useLoaderData();
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState('')
  const [loader, setLoader] = useState(true)
  // console.log(movies);

  useEffect(()=>{
    setMovies([])
    setLoader(true)
    fetch(`https://movie-portal-server-seven-gamma.vercel.app/movies/?search=${search}`)
    .then(res => res.json())
    .then(data => {
      setMovies(data)
      setLoader(false)
    })
  },[search])

  const handleSort = () => {
    setLoader(true)
    console.log(movies);
    const sorted = [...movies].sort((a, b) => b.rating - a.rating);
    console.log(sorted);
    setMovies(sorted)
    setLoader(false)

  }


  return (
    <div className="px-5 md:px-10 my-20">
      <p className="text-center text-3xl font-bold ">
          All Movies ({movies.length})
      </p>
      <div className="max-w-screen-2xl mx-auto flex justify-center gap-6 items-center flex-wrap my-8">
        
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" onChange={e=>setSearch(e.target.value)} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button onClick={handleSort} className="btn btn-accent">Sort</button>
      </div>

      
      {
          loader? <span className="loading loading-bars loading-lg mx-auto block"></span> : ""
      }
      {
        movies.length === 0 && loader === false ? <div className="min-h-[500px] mt-20 text-center text-red-600 text-4xl font-bold">NO DATA FOUND</div>  : ""
      }
      <div className="max-w-screen-2xl mx-auto min-h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
