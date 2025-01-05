import React from 'react';
const actors = [
    {
      "id": 1,
    "name": "Tom Cruise",
      "image": "https://i.ibb.co.com/gRhmQKL/a1.jpg"
    },
    {
      
      "id": 2,  
      "name": "Dwayne Johnson",
      "image": "https://i.ibb.co.com/mcbGfJk/a2.jpg"
    },
    {
      "id": 3,
      "name": "Margot Robbie",
      "image": "https://i.ibb.co.com/6yg62kC/a3.jpg"
    },
    {
      "id": 4,
        "name": "Leonardo DiCaprio",
      "image": "https://i.ibb.co.com/PGwtTmk/a4.jpg"
    },
    {
      "id": 5,
        "name": "Cillian Murphy",
      "image": "https://i.ibb.co.com/k4bLfh0/a5.jpg"
    },
    
  ]
  





const PopularActor = () => {
    return (
    <div className='max-w-screen-2xl mx-auto px-5 md:px-10 py-12'>
        <h2 className="text-3xl font-bold text-center mb-8">Our Popular Actors</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
            {
                actors.map(actor => <div className='p-3'>
                    <img src={actor.image} alt={actor.name} className='w-full rounded-full' />
                </div>)
            }
        </div>
    </div>
    );
};

export default PopularActor;