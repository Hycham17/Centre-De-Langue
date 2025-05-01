import { createContext, useContext, useState } from "react";
import { languages } from "../data/language";

const Context = createContext();
export const useCustomHooks = () => useContext(Context);

const ContextApi = ({ children }) => {
  // Dark mode
  const [isDarkMode, setisDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("Mode")) || false
  );

  // Drop-down menu
  const [showServices, setshowServices] = useState(false);
  const toggleDropDown = () => setshowServices((prev) => !prev);
  const AfficherDropDown = () => setshowServices(true);
  const HideDropDown = () => setshowServices(false);

  // NewsLetter
  const [showNewsLetter, setShowNewsLetter] = useState(false);

  // Language
  const [currentLanguage, setCurrentLanguage] = useState(
    JSON.parse(localStorage.getItem("language")) || languages[0]
  );
  const [currentLangAbrev, setCurrentLangAbrev] = useState(currentLanguage.abreviation);

  // Traduction par clé
  const traductionTitle = (objectKey) => {
    return objectKey[currentLangAbrev];
  };

  // Traduction simple
  const traductionFunction = (textFr, textEn, textAr) => {
    return currentLangAbrev === "fr"
      ? textFr
      : currentLangAbrev === "en"
      ? textEn
      : textAr;
  };

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextApi;
