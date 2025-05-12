import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faWhatsapp,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCustomHooks } from "../Context/contextApi";
import { Titles } from "../data/titles";
import { faArrowDown, faCheck, faCircle, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const social = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/CentreLC/?locale=fr_FR",
        icon: faFacebook,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/centrelc/",
        icon: faInstagram,
    },
    // {
    //     name: "WhatsApp",
    //     url: "https://www.youtube.com",
    //     icon: faWhatsapp,
    // },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/centre-de-langues-et-de-communication-hay-adil-14b31b291?originalSubdomain=ma",
        icon: faLinkedin,
    },
];

const contact = [
    {
        method: "E-mail",
        value: "centredelangues@iuhm.org",
    },
    {
        method: "Fixe",
        value: "(+212) 522604700  ",
    },
    {
        method: "GSM",
        value: "(+212) 522605952",
    },
];

const Title = ({ value }) => {
    const { traductionTitle } = useCustomHooks();

    return (
        <h1 className="text-left text-xl tracking-wider font-B ">
            {traductionTitle(Titles, value)}:
        </h1>
    );
};

const Footer = () => {
    //NewsLetter
    const { setShowNewsLetter, traductionTitle, traductionFunction } =
        useCustomHooks();
    //copy contact
    const [copiedText, setCopiedText] = useState(null);
    const copyFunction = (text) => {
        try {
            navigator.clipboard.writeText(text).then(() => setCopiedText(text));
        } catch (error) {
            setCopiedText(text);
        }
    };
    useEffect(() => {
        if (copiedText) {
            setTimeout(() => {
                setCopiedText(null);
            }, 3000);
        }
    }, [copiedText]);
    return (
        <footer className=" mt-10  p-3  shadow-2xl shadow-blackColor rounded text-blackColor flex flex-col gap-y-5 md:flex-row justify-around md:p-5 md:py-16">
            <div className="flex flex-col gap-y-4 md:items-center ">
                <Title value="schedule" />
                <div className="flex flex-col  mx-auto  gap-y-2 font-D items-start md:items-start">
                    <h1 className="">
                    <FontAwesomeIcon icon={faCircle} className="text-blueColor text-xs"/>    {traductionFunction(
                            "Du Lundi au Jeudi (De 14:00 à 21:00)",
                            "From Monday to Thursday (From 14:00  to 21:00 )",
                            "من الإثنين إلى الخميس (من الساعة 14:00 إلى الساعة 21:00)"
                        )}
                    </h1>
                    <h1>
                        {" "}
                        <FontAwesomeIcon icon={faCircle} className="text-blackColor text-xs"/>   {traductionFunction(
                            "Vendredi (De 14:30 à 21:00)",
                            "Friday (From 14:30  to 21:00 ) ",
                            "يوم الجمعة (من الساعة 14:30 إلى الساعة 21:00)"
                        )}
                    </h1>
                    <h1>
                        {" "}
                        <FontAwesomeIcon icon={faCircle} className="text-orangeColor text-xs "/>     {traductionFunction(
                            "Samedi (De 14:00 à 19:00)",
                            "Saturday (From 14:30  to 21:00 ) ",
                            "يوم  السبت (من الساعة 14:30 إلى الساعة 21:00)"
                        )}
                    </h1>
                </div>
            </div>

            <div className="flex flex-col gap-y-4  md:items-center">
                <Title value="socialMedia" />
                <div className=" flex flex-col gap-y-5 items-center">
                    <ul className="flex justify-center items-center text-xl gap-x-6 ">
                        {social.map((item) => {
                            return (
                                <li
                                    className="transition-all hover:scale-[1.1]"
                                    key={item.name}
                                    title={item.name}
                                >
                                    <a target="_blank" href={item.url}>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                 <div className="flex flex-col gap-y-2">
                 <div className="flex flex-col  mx-auto  gap-y-2 font-D items-start md:items-start">
                 {traductionTitle(Titles, "subscribe")}

</div>
<FontAwesomeIcon bounce icon={faArrowDown}/>
                 <button
                        onClick={() => setShowNewsLetter(true)}
                        className="bg-gradient-to-br w-full from-blueColor to-yellow text-white  md:w-full md:px-2 p-1  font-B hover:rou nded-b-none hover:rounded-t- rounded-xl xl transition-all duration-1000 font-semibold tracking-wider hover:bg-gradient-to-bl active:scale-[0.5]"
                    >{traductionTitle(Titles, "subscribebtn")}
                    </button>
                 </div>
                </div>
            </div>
            <div dir="ltr" className="flex flex-col gap-y-4 md:items-center">
                <Title value="contact" />
                <ul className="flex flex-col items-center w-full  md:items-start gap-y-2 font-D ">
                    {contact.map((item) => {
                        return (
                            <li
                                className=" flex items-center md:justify-between gap-x-2 "
                                key={item.value}
                            >
                                {item.method + ":" + item.value}{" "}
                                <FontAwesomeIcon
                                    onClick={() => copyFunction(item.value)}
                                    className="text-iconColor cursor-copy transition-all duration-500 hover:scale-[1.05] hover:text-blueColor"
                                    icon={
                                        copiedText == item.value
                                            ? faCheck
                                            : faCopy
                                    }
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
};
export default Footer;
