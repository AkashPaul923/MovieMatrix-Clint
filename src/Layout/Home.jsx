import Banner from "../Components/Banner";
import FAQSection from "../Components/FAQSection";
import FeaturesSection from "../Components/FearuresSection";
import FeaturedMovie from "../Components/FeaturedMovie";
// import Theme from "../Components/Theme";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedMovie></FeaturedMovie>
            <FeaturesSection></FeaturesSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;