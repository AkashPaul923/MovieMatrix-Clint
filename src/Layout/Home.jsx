import Banner from "../Components/Banner";
import FAQSection from "../Components/FAQSection";
import FeaturesSection from "../Components/FearuresSection";
import FeaturedMovie from "../Components/FeaturedMovie";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedMovie></FeaturedMovie>
            <FAQSection></FAQSection>
            <FeaturesSection></FeaturesSection>
        </div>
    );
};

export default Home;