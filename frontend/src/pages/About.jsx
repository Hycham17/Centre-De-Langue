import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../Components/GlobalComponents/SectionTitle";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { useCustomHooks } from "../Context/contextApi";
import { missions, navItems, valeurs } from "../data/about";
import img from "./../assets/About/img1.png";
import missionsimage from "./../assets/About/missions.jpeg";
import valeursimage from "./../assets/About/valeurs.jpg";
import { Link } from "react-router-dom";
const About = () => {
    //get language
    //dark mode
    //traduction for title
    const {
        currentLangAbrev,

        isDarkMode,
        traductionFunction,
    } = useCustomHooks();

    return (
        <div className="p-5 overflow-hidden min-h-screen  ">
            <div className="bg-orangeColor flex justify-center items-center">
                <ul className="flex z-[9999] fixed top-[5rem] w-[90%] md:w-[50%]  bg-whiteColor border border-blueColor shadow-xl rounded -translate-x-1/2 left-1/2 justify-between overflow-hidden">
                    {navItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    className="p-2 inline-block tracking-wider font-E active:bg-orangeColor active:text-white transition-all hover:text-blueColor text-blackColor capitalize"
                                    href={"#" + item.id}
                                >
                                    {item["label_" + currentLangAbrev]}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div id="creation">
                <SectionTitle title="creation" />
                <div className="flex flex-col gap-y-5  md:flex-row md:justify-between md:gap-x-11 md:items-center">
                    <div
                        data-aos="fade-right"
                        className="  w-full h-[14rem] sm:h-[20rem] rounded-t-3xl md:rounded-l-3xl md:rounded-none overflow-hidden hover:border-2 border-orangeColor transition-all duration-1000 "
                    >
                        <img
                            className=" w-full h-full object-cover hover:scale-[1.1] transition-all duration-1000 "
                            src={img}
                            alt="centre"
                        />
                    </div>
                    <p
                        data-aos="fade-left"
                        className=" w-full text-justify text-blackColor font-H font-semibold tracking-wide"
                    >
                        {traductionFunction(
                            "La Fondation Mohammed V a alloué dans la région Roches Noires, un espace social",
                            "The Mohammed V Foundation has allocated a social space in the Roches Noires region.",
                            "خصصت مؤسسة محمد الخامس فضاءً اجتماعياً في منطقة روش نوار"
                        )}
                        <span className="bg-gradient-to-tr from-orangeColor to-black/5 text-transparent bg-clip-text">
                            {" "}
                            «
                            {traductionFunction(
                                " Centre socioculturel Hay Adil",
                                "Sociocultural Center Hay Adil",
                                "المركز السوسيوثقافي حي عادل"
                            )}
                            »{" "}
                        </span>
                        {traductionFunction(
                            " le 10 Octobre 2006 à l’Association Initiative Urbaine & à l’Association Marocaine pour la Solidarité et l’ActionSociale (Réunies dans le Réseau des Associations Unies pour la Qualification Sociale) Aujourd’hui Centre de Langues et de Communication.",
                            "On October 10, 2006, to the Urban Initiative Association & the Moroccan Association for Solidarity and Social Action (gathered in the Network of United Associations for Social Qualification), now known as the Center for Languages and Communication.",
                            "في 10 أكتوبر 2006، إلى جمعية المبادرة الحضرية والجمعية المغربية للتضامن والعمل الاجتماعي (المجتمعتين في شبكة الجمعيات المتحدة من أجل التأهيل الاجتماعي)، وهو اليوم مركز اللغات والتواصل."
                        )}
                    </p>
                </div>
            </div>
            <div id="nosmissions">
                <SectionTitle title="mission" />
                <div className="flex flex-col gap-y-5  md:flex-row-reverse md:justify-between md:gap-x-11 md:items-center">
                    <div
                        data-aos="fade-left"
                        className="  w-full h-[14rem] sm:h-[20rem] rounded-t-3xl md:rounded-r-3xl md:rounded-none overflow-hidden hover:border-2 border-blueColor transition-all duration-1000 "
                    >
                        <img
                            className=" w-full h-full object-cover hover:scale-[1.1] transition-all duration-1000 "
                            src={missionsimage}
                            alt="missions"
                        />
                    </div>
                    <ul className="w-full  flex flex-col gap-y-3 ">
                        {missions.map((item, index) => (
                            <li
                                key={index}
                                data-aos={
                                    index % 2 == 0 ? "fade-left" : "fade-right"
                                }
                                className="font-E text-blackColor"
                            >
                                <FontAwesomeIcon
                                    className="text"
                                    color={
                                        index % 2 == 0
                                            ? "var(--orangeColor)"
                                            : "var(--blueColor)"
                                    }
                                    icon={faCheckCircle}
                                />{" "}
                                {item["label_" + currentLangAbrev]},
                            </li>
                        ))}
                    </ul>
                </div>
            </div>{" "}
            <div id="nosvaleurs">
                <SectionTitle title="values" />
                <div className="flex flex-col gap-y-5  md:flex-row md:justify-between md:gap-x-11 md:items-center">
                    <div
                        data-aos="fade-right"
                        className="  w-full h-[14rem] sm:h-[20rem] rounded-t-3xl md:rounded-l-3xl md:rounded-none overflow-hidden hover:border-2 border-orangeColor transition-all duration-1000 "
                    >
                        <img
                            className=" w-full h-full object-cover hover:scale-[1.1] transition-all duration-1000 "
                            src={valeursimage}
                            alt="valeurs"
                        />
                    </div>
                    <ul className="w-full  grid grid-cols-2 md:grid-cols-3 gap-4">
                        {valeurs.map((item, index) => (
                            <li
                                key={index}
                                data-aos={
                                    index % 2 == 0 ? "fade-down" : "fade-up"
                                }
                                style={
                                    isDarkMode
                                        ? { border: "1px double white" }
                                        : {}
                                }
                                className="valeurCard font-E select-none    text-sm  w-full shadow text-blackColor hover:scale-[1.05] odd:hover:bg-orangeColor  hover:bg-blueColor hover:text-white  rounded p-2 flex flex-col gap-y-4 justify-center items-center text-center"
                            >
                                <Link to={`/about/values/${item.label_en.split(' ').join('-')}`}>
                                <FontAwesomeIcon
                                    className="text-2xl "
                                    icon={item.icon}
                                />
                                <h1 className="h-11 flex items-center">
                                    {item["label_" + currentLangAbrev]}
                                </h1>

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
