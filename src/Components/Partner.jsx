import React from "react";

const partners = [
    {
      id: 1,
      logo: "https://i.ibb.co.com/hmw4LHx/p1.png",
      alt: "Paramount Pictures",
    },
    {
      id: 2,
      logo: "https://i.ibb.co.com/0C7cZJR/p2.png",
      alt: "Warner Bros",
    },
    {
      id: 3,
      logo: "https://i.ibb.co.com/DbnShqt/p3.png",
      alt: "MGM",
    },
    {
      id: 4,
      logo: "https://i.ibb.co.com/z7FS1gM/p6.png",
      alt: "Universal Pictures",
    },
];






  

const Partner = () => {
  return (
    <div className="bg-base-100 py-12 px-5 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Proud Partners with
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-10">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-base-100 shadow-md rounded-md p-4 flex justify-center items-center hover:shadow-lg transition-all"
          >
            <img
              src={partner.logo}
              alt={partner.alt}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
