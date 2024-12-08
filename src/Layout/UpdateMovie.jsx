// using react hook form

import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const navigate = useNavigate();
  const movie = useLoaderData();
  const {
    poster,
    title,
    genre,
    year,
    duration,
    summery,
    rating: r,
    _id,
  } = movie;
  const genres = ["Comedy", "Drama", "Horror", "Action", "Romance", "Thriller"];
  const years = [2024, 2023, 2022, 2021, 2020, 2019];

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { poster, title, genre, year, duration, summery, rating: r },
  });

  // Watch the `rating` field to display its value dynamically
  const rating = watch("rating", r);

  const onSubmit = (data) => {
    const { poster, title, genre, year, duration, summery, rating } = data;

    // Input validation
    if (!/^https?:\/\/.+\..+/.test(poster)) {
      return toast.error("Poster must be a valid URL.");
    }
    if (!title || title.length < 2) {
      return toast.error("Title must be at least 2 characters.");
    }
    if (!genre) {
      return toast.error("Please select a genre.");
    }
    if (!duration || duration <= 60) {
      return toast.error("Duration must be greater than 60 minutes.");
    }
    if (!year) {
      return toast.error("Please select a release year.");
    }
    if (!summery || summery.length < 10) {
      return toast.error("Summary must be at least 10 characters.");
    }

    fetch(`https://movie-portal-server-seven-gamma.vercel.app/movies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Movie updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate(`/movies/${_id}`);
        }
      });
  };

  const handleRating = (star) => {
    setValue("rating", star); // Update the rating field in react-hook-form
  };

  return (
    <div className="py-10">
      <div
        className="max-w-xl mx-auto bg-base-300 py-10 border-2 rounded-2xl"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className="text-center font-bold text-3xl">Update Movie</h1>
        <div className="card max-w-lg mx-auto w-full shrink-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Movie Poster */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <input
                type="text"
                placeholder="Enter Movie Poster Link"
                {...register("poster", { required: "Poster URL is required" })}
                className="input input-bordered"
              />
              {errors.poster && (
                <span className="text-red-500">{errors.poster.message}</span>
              )}
            </div>

            {/* Movie Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter movie title"
                {...register("title", {
                  required: "Title is required",
                  minLength: 2,
                })}
                className="input input-bordered"
              />
              {errors.title && (
                <span className="text-red-500">{errors.title.message}</span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Movie Genre */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select
                  {...register("genre", { required: "Genre is required" })}
                  className="input input-bordered"
                >
                  <option value="">Choose one</option>
                  {genres.map((g, idx) => (
                    <option key={idx} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                {errors.genre && (
                  <span className="text-red-500">{errors.genre.message}</span>
                )}
              </div>

              {/* Movie Year */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Year</span>
                </label>
                <select
                  {...register("year", { required: "Year is required" })}
                  className="input input-bordered"
                >
                  <option value="">Choose one</option>
                  {years.map((y, idx) => (
                    <option key={idx} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                {errors.year && (
                  <span className="text-red-500">{errors.year.message}</span>
                )}
              </div>

              {/* Movie Duration */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Duration (minutes)</span>
                </label>
                <input
                  type="number"
                  placeholder="Duration"
                  {...register("duration", {
                    required: "Duration is required",
                    min: 61,
                  })}
                  className="input input-bordered"
                />
                {errors.duration && (
                  <span className="text-red-500">
                    {errors.duration.message}
                  </span>
                )}
              </div>
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className={`mr-2 text-3xl transition-all ${
                      star <= rating ? "text-yellow-400" : "text-gray-400"
                    }`}
                    onClick={() => handleRating(star)}
                  >
                    <FaStar />
                  </div>
                ))}
              </div>
              {errors.rating && (
                <span className="text-red-500">{errors.rating.message}</span>
              )}
            </div>

            {/* Movie Summary */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie Summary</span>
              </label>
              <textarea
                placeholder="Write a summary"
                {...register("summery", {
                  required: "Summary is required",
                  minLength: 10,
                })}
                className="input input-bordered resize-none h-32"
              />
              {errors.summery && (
                <span className="text-red-500">{errors.summery.message}</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Update Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;
