import Banner from "../Components/Banner";
import FAQSection from "../Components/FAQSection";
import FeaturesSection from "../Components/FearuresSection";
import FeaturedMovie from "../Components/FeaturedMovie";
import Partner from "../Components/Partner";
import PopularActor from "../Components/PopularActor";
// import Theme from "../Components/Theme";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedMovie></FeaturedMovie>
            <PopularActor></PopularActor>
            <FeaturesSection></FeaturesSection>
            <FAQSection></FAQSection>
            <Partner></Partner>
        </div>
    );
};

export default Home;