import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const FavoriteCard = ({ favorite, favorites, setFavorites }) => {
  const { poster, title, genre, year, rating, duration, _id } = favorite;

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
        fetch(`https://movie-portal-server-seven-gamma.vercel.app/favorites/${_id}`, {
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
            const remaining = favorites.filter(fav => fav._id !== _id)
            setFavorites(remaining)
        }
        })
        }
      });
  }
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
          <p className="flex items-center">
            <span>{rating}</span> <FaStar />
          </p>
        </div>
        <div className="">
          <button onClick={()=>handleDelete(_id)} className="btn btn-primary w-full">Delete Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
