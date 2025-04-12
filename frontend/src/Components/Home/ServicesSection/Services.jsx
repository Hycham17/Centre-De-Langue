import SectionTitle from "../../GlobalComponents/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <section className="flex flex-col gap-y-5 px-5">
            <SectionTitle title="Nos Services" />
            <div className="services grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {Array.from({length:3},(_,index)=>{
                    return <ServiceCard key={index}/>
                })}
            </div>
            <div className="flex justify-center items-center">
                <button className=" w-full h-11 font-B bg-orangeColor transition-all  hover:opacity-[0.6] text-white  md:w-[31.5%] rounded md:mx-auto ">
                    Savoir plus
                </button>{" "}
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
