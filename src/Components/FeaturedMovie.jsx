import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const FeaturedMovie = () => {
    const [feMovies , setFeMovies] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/topmovies')
        .then(res => res.json())
        .then(data => setFeMovies(data))
    },[])
    return (
        <div className='py-24'>
            <p className="text-center text-3xl font-bold my-10">Featured Movie</p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {
                    feMovies.map( movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
                }
            </div>
            <Link to='/allmovies' className=" max-w-32 block my-6 mx-auto hover:text-blue-800 hover:underline"><button>See All Movies</button></Link>
        </div>
    );
};

export default FeaturedMovie;