import BigImage from "../Components/Home/bigImage";
import About from "../Components/Home/About.jsx";
import Services from "../Components/Home/ServicesSection/Services.jsx";
import Contact from "../Components/Home/Contact.jsx";
import HomeEvents from "../Components/Home/Homeevents.jsx";
import MotPresident from "../Components/Home/motPresident.jsx";

const Home = () => {
    return (
        <div>
            <BigImage />
            <About />
            <Services />
            <HomeEvents />
            <Contact />
<MotPresident/>

        </div>
    );
};
export default Home;
