import { Link } from "react-router-dom";
import SectionTitle from "../GlobalComponents/SectionTitle";
import photo from "./../../assets/CentrePhotos/photoCentre.png"
import { useCustomHooks } from "../../Context/contextApi";
import { Titles } from "../../data/titles";
import { texts } from "../../data/texts";
const About = () => {
    const { traductionTitle } = useCustomHooks();

    return (
        <section className=" px-5 flex flex-col gap-y-10 p-2 ">
            <SectionTitle title="about" />
            <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-6">
                <div
                    className="img w-full overflow-hidden rounded-xl  "
                    data-aos="fade-right"
                >
                    <img
                        className="hover:scale-[1.2]  transition-all duration-1000  w-full h-full object-cover"
                        src={photo}
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-y-3 w-full justify-center">
                    <h1
                        className="text-center text-3xl tracking-wider font-H text-blackColor font-semibold capitalize"
                        data-aos="fade-down"
                    >
{traductionTitle(Titles,'socioCulturalCenter')}                    </h1>
                    <p
                        data-aos="zoom-in"
                        className="text-justify font-E "
                        style={{
                            background:
                                "linear-gradient(to bottom, var(--orangeColor) 33.3%, var(--blueColor) 33.3% 66.6%, var(--orangeColor) 66.6%)",
                            color: "transparent",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                        }}
                    >
                   {traductionTitle(texts,'about')}
                    </p>
                    <Link to="/About" className="hover:opacity-[0.6]">
                        {" "}
                        <button
                            data-aos="fade-up"
                            className=" w-full h-11 font-B bg-orangeColor transition-all   text-white rounded "
                        >
{traductionTitle(Titles,'readMore')}                        </button>
                    </Link>
                </div>
            </div>

            
        </section>
    );
};
export default About;
