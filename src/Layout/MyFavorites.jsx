import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useState } from "react";
import FavoriteCard from "../Components/FavoriteCard";


const MyFavorites = () => {
    const {user} = useContext( AuthContext )
    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/favorites/${user.email}`)
        .then(res => res.json())
        .then(data => setFavorites(data))
    },[])

    return (
        <div>
            <p className="text-center text-3xl font-bold text-blue-950 my-10">My Favorites {favorites.length}</p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {
                    favorites.map(favorite => <FavoriteCard key={favorite._id} favorite={favorite} favorites={favorites} setFavorites={setFavorites}></FavoriteCard>)
                }
            </div>
        </div>
    );
};

export default MyFavorites;