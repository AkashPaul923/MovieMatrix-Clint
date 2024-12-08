import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const UpdateMovie = () => {
    const navigate = useNavigate()
    const movie = useLoaderData()
    const {poster, title, genre, year, duration, summery,rating:r, _id} = movie
    const genres = ["Comedy", "Drama", "Horror", "Action", "Romance", "Thriller"];
    const years = [2024, 2023, 2022, 2021, 2020, 2019];
    const [rating, setRating] = useState(r)
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target
        const poster = form.poster.value
        const title = form.title.value
        const genre = form.genre.value
        const year = form.year.value
        const duration = parseInt(form.duration.value)
        const summery = form.summery.value
        // const email = user.email
        const updateMovie = {poster, title, genre, year, rating, duration, summery}
        // console.log(duration);
        // console.log(updateMovie);
        if (!poster || !/^https?:\/\/.+\..+/.test(poster)) {
            return toast.error("Poster must be a valid URL.")
          }
          if (!title || title.length < 2) {
            return toast.error("Title must be at least 2 characters.")
          }
          if (!genre) {
            return toast.error("Please select a genre.")
          }
          if (!duration || duration <= 60) {
            return toast.error("Duration must be greater than 60 minutes.")
          }
          if (!year) {
            return toast.error("Please select a release year.")
          }
          if (rating === 0) {
            return toast.error("Please select a rating.")
          }
          if (!summary || summary.length < 10) {
            return toast.error("Summary must be at least 10 characters.")
          }

        fetch(`http://localhost:5000/movies/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateMovie)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                  title: 'Success!',
                  text: 'Add Movie successfully',
                  icon: 'success',
                  confirmButtonText: 'OK'
                })
                navigate(`/movies/${_id}`)
                // form.reset()
                // setRating(0)
            }

        })

    }

    const handleRating = (star) => {
        setRating(star)
      }
    return (
        <div>
            <div className="bg-gradient-to-b from-blue-200 via-cyan-100 to-blue-200 py-20">
        <div
          className="max-w-xl mx-auto bg-white py-10 border-2 rounded-2xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h1 className="text-center font-bold text-3xl">Update Movie</h1>

          <div className="card max-w-lg mx-auto  w-full shrink-0">
            <form onSubmit={handleSubmit} className="card-body">
                {/* movie poster */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Poster</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Movie Poster Link"
                        defaultValue={poster}
                        name="poster"
                        className="input input-bordered"
                        required
                    />
                </div>
                {/* movie title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter movie title"
                        defaultValue={title}
                        name="title"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* movie genre */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Genre</span>
                    </label>
                    <select
                        name="genre"
                        defaultValue={genre}
                        className="input input-bordered"
                        required
                    >
                        <option value="" >Choose one</option>
                        {
                            genres.map((genre, idx)=><option key={idx} value={genre}>{genre}</option>)
                        }
                    </select>
                </div>
                {/* movie year */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Year</span>
                    </label>
                    <select
                        name="year"
                        defaultValue={year}
                        className="input input-bordered"
                        required
                    >
                        <option value="" >Choose one</option>
                        {
                            years.map((year, idx)=><option key={idx} value={year}>{year}</option>)
                        }
                    </select>
                </div>
                {/* movie duration */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Duration (minutes)</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Duration"
                        defaultValue={duration}
                        name="duration"
                        className="input input-bordered"
                        required
                    />
                </div>
                </div>
                {/* rating */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <div className="flex ">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className={`mr-2 text-3xl transition-all ${ star <= rating ? "text-yellow-400" : "text-gray-400"
                        }`} onClick={() => handleRating(star)} required>
                            <FaStar />
                        </div>
                        )
                    )}
                    </div>
                </div>
                {/* movie summery */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie summary</span>
                    </label>
                    <textarea
                        // type=""
                        placeholder="Write a summary"
                        name="summery"
                        defaultValue={summery}
                        className="input input-bordered resize-none	h-32"
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Movie</button>
                </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default UpdateMovie;