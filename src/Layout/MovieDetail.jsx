import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../Auth/AuthProvider";
import { FaStar } from "react-icons/fa";

const MovieDetail = () => {
    const {user} = useContext( AuthContext )
    const {email} = user
    const movie = useLoaderData()
    const {poster, title, genre, year, rating, duration, summery, _id} = movie
    // console.log(movie);
    const navigate = useNavigate()

    const handleDelete = (_id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if(result.isConfirmed){    
            fetch(`https://movie-portal-server-seven-gamma.vercel.app/movies/${_id}`, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data =>{
                // console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                navigate('/allmovies')
            }
            })
            }
          });
    }

    const handleAddFavorite = () =>{
        // console.log('clicked')
        const newFavorite = {poster, title, genre, year, rating, duration, summery, email}
        fetch('https://movie-portal-server-seven-gamma.vercel.app/favorites',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newFavorite),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                  title: 'Success!',
                  text: 'Add Movie Favorite successfully',
                  icon: 'success',
                  confirmButtonText: 'OK'
                })
            }
        })
    }
    return (
        <div className="py-24">
            <div className="max-w-5xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-12 p-5 md:px-10 lg:p-10">
                <div className="col-span-4">
                    <img className=" w-full h-full object-cover rounded-xl" src={poster} alt="" />
                </div>
                <div className="space-y-5 col-span-8">
                    <p className="text-2xl lg:text-3xl font-bold">Movie Title: {title}</p>
                    <p >{summery}</p>
                    <p className="text-lg font-semibold">Genre: {genre}</p>
                    <p className="text-lg font-semibold">Release: {year}</p>
                    <p className="text-lg font-semibold">Duration: {duration} minutes</p>
                    <p className="text-lg font-semibold flex items-center gap-1">Rating: <FaStar className="text-yellow-500"></FaStar>{rating}/5</p>
                    <div>
                        <button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-secondary mr-12">Delete</button>
                        <Link to={`/updatemovies/${_id}`} className="btn btn-outline btn-secondary mr-12">Update</Link>
                        <button onClick={handleAddFavorite} className="btn btn-outline btn-secondary">Add favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;