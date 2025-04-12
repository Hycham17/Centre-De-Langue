import {
    faBars,
    faClose,
    faHome,
    faInfo,
    faSun,
    faTasks,
    faUser,
    faMoon,
    faCaretUp,
    faTextHeight,
} from "@fortawesome/free-solid-svg-icons";
const NavItems = [
    {
        name: "Accueil",
        icon: faHome,
        href: "/",
    },
    {
        name: "Services",
        icon: faTasks,
        href: "/Nos-services",
        children: [
            { name: "Langues", href: "/langues" },
            { name: "Soutien scolaire", href: "/soutien-scolaire" },
            { name: "Bureautique", href: "/bureautique" },
            { name: "Alphabétisation", href: "/alphabetisation" },
            { name: "Coaching scolaire", href: "/coaching-scolaire" },
            { name: "Sorties éducatives", href: "/sorties-educatives" },
            { name: "Développement personnel", href: "/developpement-personnel" },
            { name: "Activités ludiques", href: "/activites-ludiques" }
          ]
          
    },
    {
        name: "Evenements&Actualitées",
        icon: faTextHeight,
        href: "/Evenements-Actualitées",
    },

    {
        name: "inscription",
        icon: faUser,
        href: "/inscription",
    },

    {
        name: "Apropos",
        icon: faInfo,
        href: "/about",
    },
];

import logo from "../../../../logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { useCustomHooks } from "../Context/contextApi";
const Navbar = () => {
    //dark Mode
    const [isDarkMode, setisDarkMode] = useState(
        () => JSON.parse(localStorage.getItem("Mode")) || false
    );
    //State pour controller la visibilité de barre de navigationn
    const [showNavbar, setShowNavBar] = useState(window.innerWidth > 1023.33);
    //c'est la version de desktop
    const [versionDesktop, setVersionDesktop] = useState(
        window.innerWidth > 1023.33
    );
    //visibility==true pour la barre de navigation

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth > 1023.33) {
                setShowNavBar(true);
                setVersionDesktop(true);
            } else {
                setShowNavBar(false);
                setVersionDesktop(false);
            }
        };
        window.addEventListener("resize", handlResize);

        return () => removeEventListener("resize", handlResize);
    }, []);

    //DarkMode LocalStorage
    useEffect(() => {
        localStorage.setItem("Mode", isDarkMode);
        document.querySelector("html").classList.toggle("darkMode", isDarkMode);
    }, [isDarkMode]);

    //dropDown
    const {showServices,toggleDropDown,AfficherDropDown,HideDropDown}=useCustomHooks()

    return (
        <nav className="select-none z-[99999999] bg-whiteColor  px-5 shadow fixed w-full left-0  md:shadow border-b    flex items-center justify-between lg:justify-normal md:gap-x-24   ">
            <Link to="/">
                <div className="w-16 h-16">
                    <img
                        title="Centre SocioCulturel
"
                        className=" h-full w-full object-cover"
                        src={logo}
                        alt="Centre SocioCulturel
"
                    />
                </div>
            </Link>
            <AnimatePresence>
                {showNavbar && (
                    <motion.ul
                        style={
                            versionDesktop
                                ? { height: "100%", overflow: "visible" }
                                : { height: 0, overflow: "hidden" }
                        }
                        className="border border-t-0   shadow fixed left-0 top-[4.06rem] bg-whiteColor w-full right-0 flex gap-x-10 flex-col items-center gap-y-3 text-blackColor lg:static lg:flex-row  lg:shadow-none lg:border-none    "
                        animate={!versionDesktop ? { height: "434px" } : {}}
                    >
                        {NavItems.map((item, index) => (
                            <li
                                className="    w-full  h-full inline-block"
                                key={index}
                            >
                                {item.children ? (
                                    <div
                                        className="md:p-4   relative"
                                        onClick={() =>
                                            !versionDesktop &&
                                            toggleDropDown()
                                        }
                                        onMouseEnter={() =>
                                            versionDesktop &&
                                            AfficherDropDown()
                                        }
                                        onMouseLeave={() =>
                                            versionDesktop &&
                                            HideDropDown()
                                        }
                                    >
                                        <h1 className="hover:text-white  cursor-pointer h-full w-full flex justify-center items-center p-2 tracking-[2px] capitalize transition-all duration-500 hover:bg-orangeColor hover:text-blueColor md:hover:text-orangeColor  md:hover:bg-transparent md:hover:scale-[1.1] font-D gap-x-4 ">
                                            {item.name}{" "}
                                            {!versionDesktop && (
                                                <FontAwesomeIcon
                                                    icon={
                                                        !showServices
                                                            ? faCaretDown
                                                            : faCaretUp
                                                    }
                                                />
                                            )}
                                        </h1>
                                        {showServices && (
                                            <ul className="absolute    z-[999999] w-full   md:top-[4.5rem] border md-border-none md:h-auto   bg-whiteColor left-0   rounded-b-md p-2 flex flex-col gap-y-2">
                                                {item.children.map((item) => {
                                                    return (
                                                        <li className="w-full inline-block ">
                                                            <Link
                                                                className=" rounded text-blackColor  text-center text-xs transition-all hover:bg-orangeColor hover:text-white tracking-wider font-D p-2 w-full inline-block "
                                                                to={item.href}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        style={({ isActive }) => {
                                            if (
                                                isActive &&
                                                item.name !== "contact"
                                            ) {
                                                if (versionDesktop) {
                                                    return {
                                                        color: "var(--orangeColor)",
                                                        fontWeight: "bold",
                                                    };
                                                } else {
                                                    return {
                                                        background:
                                                            "var(--orangeColor)",
                                                        color: "white",
                                                        fontWeight: "bold",
                                                    };
                                                }
                                            }
                                        }}
                                        className=" w-full p-2 flex justify-center items-center  tracking-[2px] capitalize transition-all duration-500 hover:bg-orangeColor hover:text-white md:hover:text-orangeColor  md:hover:bg-transparent md:hover:scale-[1.1] font-D "
                                        to={item.href}
                                    >
                                        {item.name}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                        <li
                            className=" relative  w-full  h-full inline-block"
                        >
                            <a
                                href="#contact"
                                className=" w-full p-2 flex justify-center items-center  tracking-[2px] capitalize transition-all duration-500 hover:bg-orangeColor hover:text-white md:hover:text-orangeColor  md:hover:bg-transparent md:hover:scale-[1.1] font-D "
                            >
                                Contact
                            </a>
                        </li>
                        <button
                            onClick={() => {
                                setisDarkMode(!isDarkMode);
                            }}
                            className="text-2xl transition-all hover:scale-[1.1] p-2 hover:text-orangeColor "
                        >
                            <FontAwesomeIcon
                                icon={isDarkMode ? faSun : faMoon}
                            />
                        </button>
                    </motion.ul>
                )}
            </AnimatePresence>
            <div
                onClick={() => setShowNavBar(!showNavbar)}
                className="text-3xl   flex justify-center items-center text-iconColor hover:text-orangeColor transition-all lg:hidden"
            >
                <button>
                    <FontAwesomeIcon icon={!showNavbar ? faBars : faClose} />
                </button>
            </div>
        </nav>
    );
};
export default Navbar;
