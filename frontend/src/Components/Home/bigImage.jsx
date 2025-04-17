import Background from "../../assets/HomePage/background.png";
import logo from "../../assets/Logo/logo.png";
import france from "../../assets/HomePage/Langues/fr.png";
import espagne from "../../assets/HomePage/Langues/es.png";
import england from "../../assets/HomePage/Langues/en.png";
import allemagne from "../../assets/HomePage/Langues/al.png";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
const Langues = [
    {
        name: "français",
        logo: france,
        title: "Centre de Langues et de communication",
        text: "Venez nous rejoindre pour une pause linguistique.",
        btnText: "Rejoindre Maintenant !",
    },
    {
        name: "anglais",
        logo: england,
        title: "Center for Languages ​​and Communication",
        text: "                  Come join us for a language break.",
        btnText: "Join Now!",
    },
    {
        name: "espagnole",
        logo: espagne,
        title: "Centro de Lenguajes y Comunicaciones",
        text: "    ¡Únase a nosotros para un descanso del idioma!                 ",
        btnText: "¡Únete ahora!",
    },
    {
        name: "allemande",
        logo: allemagne,
        title: "Zentrum für Sprachen und Kommunikation",
        text: "               Gönnen Sie sich mit uns eine Sprachpause.",
        btnText: "Jetzt beitreten!",
    },
];

const BigImage = () => {
    //State pour changer le text grande image dans la page accueil
    const [currentIndex, setCurentIndex] = useState(0);
    //
    const [title, setTitle] = useState(Langues[currentIndex].title);
    const [titleWrited, settitleWrited] = useState("");
    const [indexLetter, setIndexLitter] = useState(0);
    useEffect(() => {
        setTitle(Langues[currentIndex].title);
    }, [currentIndex]);
    //Increment the Letterindex
    useEffect(() => {
        const Interval = setInterval(() => {
            if (indexLetter < title.length) {
                setIndexLitter((prev) => prev + 1);
            }
        }, 200);
        return () => clearInterval(Interval);
    }, []);
    //writing
    useEffect(() => {
        if (indexLetter < title.length) {
            settitleWrited((prev) => prev + title.at(indexLetter));
        }
    }, [indexLetter]);
    // default state
    useLayoutEffect(() => {
        setTitle(Langues[currentIndex].title);
        settitleWrited("");
        setIndexLitter(0);
    }, [currentIndex]);
    return (
        <div
        dir="ltr"
            style={{
                background: "url(" + Background + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="h-[90vh] min-h-[90vh]   overflow-hidden flex flex-col px-5   justify-between items-center  w-full "
        >
            <div className="flex  h-full     flex-col-reverse items-center md:flex-row   w-full  md:justify-between  ">
                <div className="left w-full h-full flex-1   justify-around flex flex-col    text-white md:justify-center md:gap-y-10 ">
                    <h1 style={{textShadow:'1px 1px 0px black'}} className=" text-2xl leading-relaxed  w-full md:text-4xl font-A tracking-wider  md:leading-loose">
                        {titleWrited} <span className="font-light animate-spin">|</span>
                    </h1>
                    <p
                        data-aos="fade-right"
                        className="text-xl md:text-2xl font-H font-semibold"
                    >
                        {Langues[currentIndex].text}{" "}
                    </p>
                    <div className=" flex  justify-center items-center  h-10 md:justify-start w-full  ">
                        <a
                            data-aos="fade-up"
                            href="#contact"
                            className="h-full flex justify-center items-center duration-1000 border-2 p-1 w-full rounded font-B font-semibold tracking-wider transition-all hover:bg-orangeColor md:w-2/3 "
                        >
                            {Langues[currentIndex].btnText}{" "}
                        </a>
                    </div>
                </div>
                <div className="right flex-1 h-full w-full   flex justify-center items-center ">
                    <div
                        data-aos="zoom-out"
                        className="img w-64 md:w-96  "
                    >
                        <img src={logo} className="w-full h-full object-cover" alt="CentreDuLangue" />
                    </div>
                </div>
            </div>

            <motion.ul className="flex  justify-center   items-center gap-x-3 w-full  p-2 ">
                {Langues.map((item, index) => (
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={
                            currentIndex == index
                                ? { opacity: 1 }
                                : { opacity: 0.4 }
                        }
                        transition={{ duration: 2 }}
                        key={index}
                        onClick={() => setCurentIndex(index)}
                        title={item.name.toLocaleUpperCase()}
                        className="w-16 h-10  transition-all duration-700 cursor-pointer hover:scale-[1.1] opacity-[0.4]"
                        style={currentIndex == index ? { opacity: 1 } : {}}
                    >
                        <img
                            className="h-full w-full rounded-md"
                            src={item.logo}
                        />
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};
export default BigImage;
