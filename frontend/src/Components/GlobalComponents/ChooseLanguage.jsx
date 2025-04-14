import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useCustomHooks } from "../../Context/contextApi";


const ChooseLanguage = () => {
    const {setCurrentLanguage,currentLanguage,languages,setCurrentLangAbrev}=useCustomHooks() 
    const [showLanguage, setShowLanguage] = useState(false);

    useEffect(() => {
        localStorage.setItem("language", JSON.stringify(currentLanguage));
        setCurrentLangAbrev(currentLanguage.abreviation)
    }, [currentLanguage]);
    return (
        <div className="fixed shadow rounded  z-[9999] bottom-28 right-5 w-[120px]">
            <div className="relative  ">
                <button
                    style={
                        showLanguage
                            ? {
                                  borderTopLeftRadius: 0,
                                  borderTopRightRadius: 0,
                                  borderTop: 0,
                              }
                            : {}
                    }
                    className="bg-whiteColor border flex justify-center items-center w-full h-10 rounded p-2"
                    onClick={() => setShowLanguage((prev) => !prev)}
                >
                    <div className="flex items-center justify-between gap-x-3">
                        <div className="w-10">
                            <img
                                className="w-full h-full  rounded"
                                src={currentLanguage.image}
                                alt=""
                            />
                        </div>
                        <span className=" font-A text-sm text-blackColor">
                            {currentLanguage.abreviation}
                        </span>
                        <FontAwesomeIcon
                            color="var(--blackColor)"
                            icon={showLanguage ? faChevronUp : faChevronDown}
                        />
                    </div>
                </button>
                {showLanguage && (
                    <ul className="absolute border border-b-0 w-full left-0 overflow-hidden rounded-t bottom-[100%] bg-whiteColor flex flex-col gap-y-1">
                        {languages.map((item) =>
                            item.id !== currentLanguage.id ? (
                                <li data-aos="fade-down">
                                    {" "}
                                    <button
                                        className="opacity-[0.5] bg-whiteColor h-10  p-2 w-full  flex hover:bg-orangeColor hover:opacity-[1] text-blackColor hover:text-white "
                                        onClick={() => {
                                            setCurrentLanguage(item);

                                            setShowLanguage(false);
                                        }}
                                    >
                                        <div className="flex  items-center justify-between gap-x-3">
                                            <div className="w-10">
                                                <img
                                                    className="w-full h-full  rounded"
                                                    src={item.image}
                                                    alt=""
                                                />
                                            </div>
                                            <span className="font-A text-sm">
                                                {item.abreviation}
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            ) : null
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};
export default ChooseLanguage;
