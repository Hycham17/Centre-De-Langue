import { useState } from "react";
import france from "./../../assets/HomePage/Langues/fr.png";
import arabic from "./../../assets/HomePage/Langues/arabic.png";
import english from "./../../assets/HomePage/Langues/en.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const languages = [
    {
        id: 1,
        name: "Français",
        abréviation: "fr",
        image: france,
    },
    {
        id: 2,
        name: "العربية",
        abréviation: "ar",
        image: arabic,
    },
    {
        id: 3,
        name: "English",
        abréviation: "en",
        image: english,
    },
];

const ChooseLanguage = () => {
    const [showLanguage, setShowLanguage] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
    return (
        <div className="fixed shadow  z-[9999] bottom-28 right-5 w-[120px]">
        <div className="relative  ">
        <button style={showLanguage?{borderTopLeftRadius:0,borderTopRightRadius:0,borderTop:0}:{}} className="bg-whiteColor border flex justify-center items-center w-full h-10 rounded p-2" onClick={() => setShowLanguage((prev) => !prev)}>
                <div className="flex items-center justify-between gap-x-3">
                    <div className="w-10">
                        <img className="w-full h-full  rounded" src={currentLanguage.image} alt="" />
                    </div>
                    <span className=" font-A text-sm text-blackColor">{currentLanguage.abréviation}</span>
                    <FontAwesomeIcon
                     color="var(--blackColor)"   icon={showLanguage ? faChevronUp : faChevronDown}
                    />
                </div>
            </button>
          {showLanguage&&  <ul className="absolute border border-b-0 w-full left-0 overflow-hidden rounded-t bottom-[100%] bg-whiteColor flex flex-col gap-y-1">
             {languages.map(item=>item.id!==currentLanguage.id?<li data-aos='fade-down' >        <button  className="opacity-[0.5] bg-whiteColor h-10  p-2 w-full  flex hover:bg-orangeColor hover:opacity-[1] text-blackColor hover:text-white " onClick={() => {setCurrentLanguage(item)

                setShowLanguage(false)
             }}>
                <div className="flex  items-center justify-between gap-x-3">
                    <div className="w-10">
                        <img className="w-full h-full  rounded" src={item.image} alt="" />
                    </div>
                    <span className="font-A text-sm">{item.abréviation}</span>
                   
                </div>
            </button></li>:null)}
            </ul>}
        </div>
        </div>
    );
};
export default ChooseLanguage;
