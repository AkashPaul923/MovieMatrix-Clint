import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useState } from "react";
import FavoriteCard from "../Components/FavoriteCard";


const MyFavorites = () => {
    const {user} = useContext( AuthContext )
    const [favorites, setFavorites] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        setLoader(true)
        fetch(`https://movie-portal-server-seven-gamma.vercel.app/favorites/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setFavorites(data)
            setLoader(false)
        })

    },[])

    return (
        <div>
            <p className="text-center text-3xl font-bold my-10">My Favorites</p>
            {
                loader? <span className="loading loading-bars loading-lg mx-auto block"></span> : ""
            }
            {
                favorites.length === 0 && loader === false  ? <div className="min-h-[400px] mt-20 text-center text-red-600 text-4xl font-bold">NO DATA FOUND</div>  : ""
            }
            <div className="max-w-screen-2xl mx-auto min-h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 mb-14 px-5 md:px-10">
                {
                    favorites.map(favorite => <FavoriteCard key={favorite._id} favorite={favorite} favorites={favorites} setFavorites={setFavorites}></FavoriteCard>)
                }
            </div>
        </div>
    );
};

export default MyFavorites;