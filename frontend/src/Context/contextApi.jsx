import { createContext, useContext, useEffect, useState } from "react";
import { languages } from "../data/language";
const Context = createContext();
export const useCustomHooks = () => useContext(Context);
const ContextApi = ({ children }) => {
    //State pour controller la visibilité de barre de navigationn
    const [showNavbar, setShowNavBar] = useState(window.innerWidth > 1023.33);
    //dark Mode
    const [isDarkMode, setisDarkMode] = useState(
        () => JSON.parse(localStorage.getItem("Mode")) || false
    );
    //drop down
    const [showServices, setshowServices] = useState(false);
    const toggleDropDown = () => setshowServices((prev) => !prev);
    const AfficherDropDown = () => {
        setshowServices(true);

        setShowNavBar(true);
    };
    const HideDropDown = () => setshowServices(false);
    //NewsLetter
    const [showNewsLetter, setShowNewsLetter] = useState(false);
    //traduction
    const [currentLanguage, setCurrentLanguage] = useState(
        JSON.parse(localStorage.getItem("language")) || languages[0]
    );

    //current language
    const [currentLangAbrev, setCurrentLangAbrev] = useState(
        currentLanguage.abreviation
    );
    //traduction function

    const traductionTitle = (Array, key) => {
        return Array[key][currentLangAbrev];
    };

    //function traduction static values
    const traductionFunction = (textFr, textEn, textAr) => {
        return currentLangAbrev == "fr"
            ? textFr
            : currentLangAbrev == "en"
            ? textEn
            : textAr;
    };

    //Fetch Evenemets
    const [loading, setLoading] = useState(false);
    const [Events, setEvents] = useState([]);
    const [error, setError] = useState(null);
   //get Date 
   const  dateFormat=(date)=>{
    const dateObj = new Date(date);
    const day=dateObj.getDate().toString().padStart(2, '0'); // Add leading zero if needed
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
        
    }
    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            try {
                const respoonse = await fetch(
                    "http://localhost:8000/api/evenements"
                );
                const data = await respoonse.json();
                if (respoonse.ok) {
                    setEvents(data.map(item=>{
                        return {
                            ...item,
                            title: {
                                fr: item.title_fr,
                                en: item.title_en,
                                ar: item.title_ar,
                            },
                            description: {
                                fr: item.description_fr,
                                en: item.description_en,
                                ar: item.description_ar,
                            },
                        };
                    }));
                    setLoading(false);
                } else {
                    setError("error");
                    setLoading(false);
                }
            } catch (error) {
                setError(error.message);
            }
        };
        fetchEvents()
    }, []);
    return (
        <Context.Provider
            value={{
                showServices,
                toggleDropDown,
                AfficherDropDown,
                HideDropDown,
                showNewsLetter,
                setShowNewsLetter,
                isDarkMode,
                setisDarkMode,
                setCurrentLanguage,
                currentLanguage,
                languages,
                currentLangAbrev,
                setCurrentLangAbrev,
                traductionTitle,
                traductionFunction,
                showNavbar,
                setShowNavBar,
                error,
                loading,
                Events,
                dateFormat
            }}
        >
            {children}
        </Context.Provider>
    );
};
export default ContextApi;
