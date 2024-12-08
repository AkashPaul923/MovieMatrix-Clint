
import { AiOutlineEye, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGrid3X3 } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";

const FeaturesSection = () => {
  const features = [
    {
      icon: <AiOutlineEye size={30} />,
      title: "Track Your Watched Movies",
      description: "Keep track of every movie you've watched or start fresh with your new journey.",
    },
    {
      icon: <AiOutlineHeart size={30} />,
      title: "Show Some Love",
      description: "Like your favorite movies, lists, and reviews to share your appreciation.",
    },
    {
      icon: <RiArticleLine size={30} />,
      title: "Write and Share Reviews",
      description: "Share your thoughts and follow other reviewers to expand your movie knowledge.",
    },
    {
      icon: <AiOutlineStar size={30} />,
      title: "Rate Movies",
      description: "Rate movies on a five-star scale and share your personal reactions.",
    },
    {
      icon: <FiBookOpen size={30} />,
      title: "Keep a Movie Diary",
      description: "Log your movie-watching experiences and analyze your viewing habits.",
    },
    {
      icon: <BsGrid3X3 size={30} />,
      title: "Create Movie Lists",
      description: "Organize films into custom lists and build your ultimate watchlist.",
    },
  ];

  return (
    <div className=" py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">MovieMatrix Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center  rounded-lg p-6 text-center border-2 transition"
            >
              <div className="text-red-500 mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
