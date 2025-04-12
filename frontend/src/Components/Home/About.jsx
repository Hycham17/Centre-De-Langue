import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../GlobalComponents/SectionTitle";
import photo from "./../../assets/CentrePhotos/photoCentre.png"
const About = () => {
    return (
        <section className=" px-5 flex flex-col gap-y-10 p-2 ">
            <SectionTitle title="à propos" />
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
                        Centre SocioCulturel
                    </h1>
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
                        ​Le Centre de Langues et de Communication, également
                        connu sous le nom de Centre Socioculturel Hay Adil, a
                        été mis en place en 2006 grâce à l'initiative de la
                        Fondation Mohammed V, qui a alloué un local à
                        l'association Initiative Urbaine et à l'Association
                        Marocaine de Solidarité et d'Action Sociale. Ce centre
                        est situé sur le boulevard de la Grande Ceinture,
                        quartier Hay Adil, à Casablanca.
                    </p>
                    <Link to="/About" className="hover:opacity-[0.6]">
                        {" "}
                        <button
                            data-aos="fade-up"
                            className=" w-full h-11 font-B bg-orangeColor transition-all   text-white rounded "
                        >
                            Savoir Plus
                        </button>
                    </Link>
                </div>
            </div>

            
        </section>
    );
};
export default About;
