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
        name: { fr: "Accueil", en: "Home", ar: "الصفحة الرئيسية" },
        icon: faHome,
        href: "/",
    },
    {
        name: { fr: "Services", en: "Services", ar: "الخدمات" },
        icon: faTasks,

        children: [
            {
                name: { fr: "Langues", en: "Languages", ar: "اللغات" },
            },
            {
                name: {
                    fr: "Soutien scolaire",
                    en: "School Support",
                    ar: "الدعم المدرسي",
                },
            },
            {
                name: {
                    fr: "Bureautique",
                    en: "bureautique",
                    ar: "الأدوات المكتبية",
                },
            },
            {
                name: {
                    fr: "Alphabétisation",
                    en: "Literacy",
                    ar: "محو الأمية",
                },
            },
            {
                name: {
                    fr: "Coaching scolaire",
                    en: "School Coaching",
                    ar: "التوجيه المدرسي",
                },
            },
            {
                name: {
                    fr: "Sorties éducatives",
                    en: "Educational Trips",
                    ar: "الرحلات التعليمية",
                },
            },
            {
                name: {
                    fr: "Développement personnel",
                    en: "Personal Development",
                    ar: "التنمية الشخصية",
                },
            },
            {
                name: {
                    fr: "Activités ludiques",
                    en: "Fun Activities",
                    ar: "الأنشطة الترفيهية",
                },
            },
        ],
    },
    {
        name: {
            fr: "évenements&Actualitées",
            en: "Events & News",
            ar: "الفعاليات والأخبار",
        },
        icon: faTextHeight,
        href: "/Events",
    },
    {
        name: { fr: "inscription", en: "Registration", ar: "التسجيل" },
        icon: faUser,
        href: "/inscription",
    },
    {
        name: { fr: "à propos", en: "About", ar: "معلومات عنا" },
        icon: faInfo,
        href: "/about",
    },
];

import logo2 from "./../assets/Logo/logo2.png";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { useCustomHooks } from "../Context/contextApi";
import { Titles } from "../data/titles";
import clsx from "clsx";
const Navbar = () => {
    //dark mode
    const { isDarkMode, setisDarkMode } = useCustomHooks();
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
    //currentLang
    //traduction function
    const {
        showServices,
        toggleDropDown,
        AfficherDropDown,
        HideDropDown,
        currentLangAbrev,
        traductionTitle,
    } = useCustomHooks();
    //get params for custom active class
    const { serviceName } = useParams();
//hide navbar when user click on Link 
const location=useLocation() 
useEffect(()=>{
if(!versionDesktop){
    setShowNavBar(false)

}
},[location.pathname])
    return (
        <nav className="select-none z-[99999999] bg-whiteColor  px-5 shadow fixed w-full left-0  md:shadow border-b    flex items-center justify-between lg:justify-normal md:gap-x-24   ">
            <Link to="/">
                <div className="w-16 h-16">
                    <img
                        title="Centre SocioCulturel
"
                        className=" h-full w-full object-cover"
                        src={logo2}
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
                        className="border border-t-0   shadow fixed left-0 top-[4.06rem] bg-whiteColor w-full right-0 flex justify-around  flex-col items-center gap-y-3 text-blackColor lg:static lg:flex-row  lg:shadow-none lg:border-none   "
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
                                            !versionDesktop && toggleDropDown()
                                        }
                                        onMouseEnter={() =>
                                            versionDesktop && AfficherDropDown()
                                        }
                                        onMouseLeave={() =>
                                            versionDesktop && HideDropDown()
                                        }
                                    >
                                        <h1
                                            className={clsx(
                                                "hover:text-white lg:text-sm cursor-pointer h-full w-full flex justify-center items-center p-2  capitalize transition-all duration-500 hover:bg-orangeColor hover:text-blueColor lg:hover:text-orangeColor  lg:hover:bg-transparent  font-E gap-x-4 ",
                                                currentLangAbrev !== "ar" &&
                                                    "tracking-[2px]"
                                            )}
                                        >
                                            {item.name[currentLangAbrev]}{" "}
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
                                            <ul className="absolute    z-[9999999999999999999999999999] w-full   md:top-[4.3rem]  border-t-0 md-border-none md:h-auto   bg-whiteColor left-0   rounded-b-md p-2 flex flex-col gap-y-2">
                                                {item.children.map(
                                                    (item, index) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                className="w-full inline-block "
                                                            >
                                                                <NavLink
                                                                    style={
                                                                        serviceName &&
                                                                        serviceName
                                                                            .toLowerCase()
                                                                            .split(
                                                                                "-"
                                                                            )
                                                                            .join(
                                                                                " "
                                                                            )
                                                                            .toLowerCase() ==
                                                                            item.name[
                                                                                "en"
                                                                            ].toLowerCase()
                                                                            ? {
                                                                                  background:
                                                                                      "var(--orangeColor)",
                                                                                  color: "white",
                                                                              }
                                                                            : {}
                                                                    }
                                                                    className=" rounded text-blackColor  text-center text-xs transition-all hover:bg-orangeColor hover:text-white tracking-wider font-E p-2 w-full inline-block "
                                                                    to={
                                                                       '/services/'+item.name['en'].split(' ').join('-').toLowerCase()
                                                                    }
                                                                >
                                                                    {
                                                                        item
                                                                            .name[
                                                                            currentLangAbrev
                                                                        ]
                                                                    }
                                                                </NavLink>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        style={({ isActive }) => {
                                            if (
                                                isActive &&
                                                item.name["fr"] !== "contact"
                                            ) {
                                                if (versionDesktop) {
                                                    return {
                                                        color: "var(--orangeColor)",
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
                                        className={clsx(
                                            " w-full p-2 flex justify-center  lg:text-sm items-center  capitalize transition-all duration-500 hover:bg-orangeColor hover:text-white lg:hover:text-orangeColor  lg:hover:bg-transparent font-E ",
                                            currentLangAbrev !== "ar" &&
                                                "tracking-[2px]"
                                        )}
                                        to={item.href}
                                    >
                                        {item.name[currentLangAbrev]}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                        <li className="   w-full  h-full inline-block">
                            <a
                                href="/#contact"
                                className={clsx(
                                    " w-full p-2 lg:text-sm flex justify-center items-center   capitalize transition-all duration-500 hover:bg-orangeColor hover:text-white lg:hover:text-orangeColor  lg:hover:bg-transparent  font-E ",
                                    currentLangAbrev !== "ar" &&
                                        "tracking-[2px]"
                                )}
                            >
                                {traductionTitle(Titles, "contact")}
                            </a>
                        </li>
                        <button
                            onClick={() => {
                                setisDarkMode(!isDarkMode);
                            }}
                            className="text-2xl transition-all  hover:scale-[1.1] p-2 hover:text-orangeColor "
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
