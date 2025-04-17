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
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
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
        <h1 className="text text-xl tracking-wider font-B">
            {traductionTitle(Titles, value)}:
        </h1>
    );
};

const Footer = () => {
    //NewsLetter
    const { setShowNewsLetter, traductionTitle } = useCustomHooks();
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
                <div className="flex flex-col gap-y-2 font-D items-end md:items-start">
                    <h1>Du Lundi au Samedi</h1>
                    <h1>De 09h00 à 18h30</h1>
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
                    <button
                        onClick={() => setShowNewsLetter(true)}
                        className="bg-gradient-to-br from-blueColor to-yellow text-white w-[30%] md:w-full md:px-2 p-1  font-B hover:rou nded-b-none hover:rounded-t- rounded-xl xl transition-all duration-1000 font-semibold tracking-wider hover:bg-gradient-to-bl active:scale-[0.5]"
                    >
                        {traductionTitle(Titles, "subscribe")}
                    </button>
                </div>
            </div>
            <div dir="ltr" className="flex flex-col gap-y-4 md:items-center">
                <Title value="contact" />
                <ul className="flex flex-col items-end md:items-start gap-y-2 font-D ">
                    {contact.map((item) => {
                        return (
                            <li
                                className="w-full flex items-center md:justify-between gap-x-2 "
                                key={item.value}
                            >
                                {item.method + ":" + item.value}{" "}
                                <FontAwesomeIcon
                                    onClick={()=>copyFunction(item.value)}

                                    className="text-iconColor cursor-copy transition-all duration-500 hover:scale-[1.05] hover:text-blueColor"
                                    icon={copiedText==item.value?faCheck:faCopy}
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
