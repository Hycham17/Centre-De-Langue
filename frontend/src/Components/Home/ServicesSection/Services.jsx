import { useCustomHooks } from "../../../Context/contextApi";
import SectionTitle from "../../GlobalComponents/SectionTitle";
import ServiceCard from "./ServiceCard";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useState } from "react";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Titles } from "../../../data/titles";
import { services } from "../../../data/Services";

  

const Services = () => {
    //Afficher drop down
    //traduction
    const { AfficherDropDown, traductionTitle } = useCustomHooks();
    //services Slider
    const [Currentindex, setCurrentIndex] = useState(0);

    return (
        <section className="flex  flex-col  px-5  gap-y-6 ">
            <SectionTitle title="services" />
            <div className="w-full relative">
                <div className="  services grid  place-self-center gap-5    sm:grid-cols-2 md:grid-cols-3    ">
                    {/* sort(()=>Math.random()-0.5) */}
                    {services
                        .slice(3 * Currentindex, (Currentindex + 1) * 3)
                        .map((item) => {
                            return <ServiceCard service={true} {...item} key={item.id} />;
                        })}
                </div>
                {(Currentindex + 1) * 3 < services.length - 1 && (
                    <button
                        onClick={() => setCurrentIndex((prev) => prev + 1)}
                        className="absolute text-iconColor text-3xl -top-14  right-0 active:text-blackColor"
                    >
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                    </button>
                )}

                {Currentindex > 0 && (
                    <button
                        onClick={() => setCurrentIndex((prev) => prev - 1)}
                        className="absolute text-iconColor text-3xl -top-14  left-0 active:text-blackColor"
                    >
                        <FontAwesomeIcon icon={faChevronCircleLeft} />
                    </button>
                )}
            </div>
            <div className="flex my-10 justify-center items-center">
                <button
                    onClick={() => AfficherDropDown()}
                    className=" w-full sm:w-[50%] h-11 font-B bg-orangeColor transition-all  hover:opacity-[0.6] text-white  md:w-[30%] rounded md:mx-auto "
                >
                    {traductionTitle(Titles,'discoverMore')}
                </button>
            </div>
        </section>
    );
};
export default Services;

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; // ضروري باش يبان التنسيق

// const Services = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // مثال ديال بيانات الجلسات
//   const sessions = {
//     "2025-04-12": "Cours de Français - 16h",
//     "2025-04-13": "Soutien Maths - 10h",
//     "2025-04-15": "Cours d'Anglais - 14h",
//   };

//   const getSessionForDate = (date) => {
//     const key = date.toISOString().split("T")[0];
//     return sessions[key] || "Aucune session prévue";
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-white p-4 rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold text-orangeColor text-center mb-4">
//         Planning des Sessions
//       </h2>
//       <Calendar onChange={setSelectedDate} value={selectedDate} />

//       <div className="mt-6 text-center">
//         <h3 className="text-lg font-semibold text-blue-800">📅 {selectedDate.toDateString()}</h3>
//         <p className="text-gray-700 mt-2">{getSessionForDate(selectedDate)}</p>
//       </div>
//     </div>
//   );
// };

// export default Services;
