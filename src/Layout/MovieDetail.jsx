import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const MovieDetail = () => {
    const movie = useLoaderData()
    const {poster, title, genre, year, rating, duration, summery, _id} = movie
    console.log(movie);
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
            
            fetch(`http://localhost:5000/movies/${_id}`, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                navigate('/allmovies')
            }
            })
          });
    }
    return (
        <div className="py-24">
            <div className="max-w-5xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-12 p-5 lg:p-10 border border-red-500">
                <div className="col-span-4">
                    <img className=" w-full h-full object-cover rounded-xl" src={poster} alt="" />
                </div>
                <div className="space-y-5 col-span-8">
                    <p className="text-2xl lg:text-3xl font-bold">Movie Title: {title}</p>
                    <p >{summery}</p>
                    <p className="text-lg font-semibold">Genre: {genre}</p>
                    <p className="text-lg font-semibold">Release: {year}</p>
                    <p className="text-lg font-semibold">Duration: {duration} minutes</p>
                    <p className="text-lg font-semibold">Rating: {rating}/5</p>
                    <div>
                        <button onClick={()=>handleDelete(_id)} className="btn mr-12">Delete</button>
                        <button className="btn">Add favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;