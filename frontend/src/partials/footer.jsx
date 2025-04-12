import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faWhatsapp,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCustomHooks } from "../Context/contextApi";

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
        value: "contact@iuhm.org",
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
    return <h1 className="text text-xl tracking-wider font-B">{value}:</h1>;
};

const Footer = () => {
    //NewsLetter 
const {setShowNewsLetter,showNewsLetter}=useCustomHooks()
    return (
        <footer className=" mt-10  p-3 shadow-2xl shadow-blackColor rounded text-blackColor flex flex-col gap-y-5 md:flex-row justify-around md:p-5">
            <div className="flex flex-col gap-y-4 md:items-center">
                <Title value={"Horaires"} />{" "}
                <div className="flex flex-col gap-y-2 font-D items-end md:items-start">
                    <h1>Du Lundi au Samedi</h1>
                    <h1>De 09h00 à 18h30</h1>
                </div>
            </div>

            <div className="flex flex-col gap-y-4  md:items-center">
                <Title value="Social" />
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
                <button onClick={()=>setShowNewsLetter(true)} className="bg-gradient-to-br from-blueColor to-yellow text-white w-[30%] md:w-full md:px-2 p-1 rounded-b-3xl font-B hover:rounded-b-none hover:rounded-t-3xl transition-all duration-1000 font-semibold tracking-wider hover:bg-gradient-to-bl active:scale-[0.5]">S'abonner</button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 md:items-center">
                <Title value="Conatct" />
                <ul className="flex flex-col items-end md:items-start gap-y-2 font-D ">
                    {contact.map((item) => {
                        return (
                            <li key={item.value}>
                                {item.method + ":" + item.value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
};
export default Footer;
