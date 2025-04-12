import BigImage from "../Components/Home/bigImage";
import About from "../Components/Home/About.jsx";
import Services from "../Components/Home/ServicesSection/Services.jsx";
import Contact from "../Components/Home/Contact.jsx";

const Home = () => {
    return (
        <div>
            <BigImage />
            <About />
            <Services />
            <Contact />
        </div>
    );
};
export default Home;
