import { useCustomHooks } from "../../../Context/contextApi";
import SectionTitle from "../../GlobalComponents/SectionTitle";
import ServiceCard from "./ServiceCard";
//import images
import bureautiqueImg from "./../../../assets/HomePage/Services/bureautique.png";
import Alphabitésation from "./../../../assets/HomePage/Services/Alphabétisation.png";
import SoutienScolaire from "./../../../assets/HomePage/Services/Soutienscolaire.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
    faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { Titles } from "../../../data/titles";
const services = [
    {
      id: 1,
      photo: SoutienScolaire,
      title: {
        fr: "Soutien Scolaire",
        en: "Academic Support",
        ar: "الدعم المدرسي",
      },
      description: {
        fr: "Ce service s’adresse aux élèves du primaire, du collège et du lycée...",
        en: "This service is for primary, middle, and high school students facing difficulties or wanting to strengthen their knowledge...",
        ar: "يستهدف هذا البرنامج تلاميذ الابتدائي والإعدادي والثانوي الذين يواجهون صعوبات أو يرغبون في تعزيز مكتسباتهم...",
      },
    },
    {
      id: 2,
      photo: bureautiqueImg,
      title: {
        fr: "Bureautique",
        en: "Office Software Training",
        ar: "التكوين في البرامج المكتبية",
      },
      description: {
        fr: "Nos formations en bureautique permettent aux apprenants de maîtriser Word, Excel, PowerPoint à travers des exercices pratiques adaptés...",
        en: "Our training helps learners master Word, Excel, and PowerPoint through practical exercises tailored to each need...",
        ar: "توفر دوراتنا في البرمجيات المكتبية تكويناً عملياً في Word وExcel وPowerPoint حسب احتياجات كل متعلم...",
      },
    },
    {
      id: 3,
      photo: Alphabitésation,
      title: {
        fr: "Alphabétisation",
        en: "Literacy",
        ar: "محو الأمية",
      },
      description: {
        fr: "Ce service est destiné principalement aux femmes n’ayant pas eu accès à l’éducation, pour leur permettre d’apprendre à lire, écrire et compter...",
        en: "This service is mainly for women who didn’t have access to education, helping them learn to read, write, and count...",
        ar: "يستهدف هذا البرنامج أساسًا النساء اللواتي لم يتسن لهن فرصة التعلم، لمساعدتهن على القراءة والكتابة والحساب...",
      },
    },
    {
      id: 4,
      photo: "https://picsum.photos/200/300",
      title: {
        fr: "Langues",
        en: "Languages",
        ar: "اللغات",
      },
      description: {
        fr: "Des cours de langues vivantes (français, anglais, espagnol, allemand) avec une méthode communicative, interactive et adaptée au niveau de chacun...",
        en: "Language courses (French, English, Spanish, German) using a communicative, interactive method adapted to all levels...",
        ar: "دروس في اللغات الحية (الفرنسية، الإنجليزية، الإسبانية، الألمانية) بطريقة تفاعلية تواصلية تراعي مستوى كل متعلم...",
      },
    },
    {
      id: 5,
      photo: SoutienScolaire,
      title: {
        fr: "Sorties éducatives",
        en: "Educational Trips",
        ar: "رحلات تعليمية",
      },
      description: {
        fr: "Des sorties culturelles et pédagogiques pour explorer musées, jardins, sites historiques, enrichir les connaissances et éveiller la curiosité...",
        en: "Educational and cultural trips to explore museums, gardens, historical sites, enriching knowledge and stimulating curiosity...",
        ar: "تنظيم خرجات ثقافية وتعليمية لزيارة المتاحف، الحدائق، والمواقع التاريخية لتعزيز المعرفة وتنمية الفضول المعرفي...",
      },
    },
    {
      id: 6,
      photo: "https://picsum.photos/200/300",
      title: {
        fr: "Développement personnel",
        en: "Personal Development",
        ar: "التنمية الذاتية",
      },
      description: {
        fr: "Des ateliers (confiance en soi, gestion du stress...) animés par des experts pour mieux se connaître, dépasser ses blocages, et s’épanouir...",
        en: "Workshops (self-confidence, stress management...) led by experts to promote self-knowledge, growth, and success...",
        ar: "ورشات (الثقة بالنفس، إدارة التوتر...) يشرف عليها مختصون لمساعدة المشاركين على التطور وتحقيق ذواتهم...",
      },
    },
    {
      id: 7,
      photo: "https://picsum.photos/200/300",
      title: {
        fr: "Activités ludiques",
        en: "Fun Activities",
        ar: "أنشطة ترفيهية",
      },
      description: {
        fr: "Jeux, concours, théâtre, bricolage... pour apprendre en s’amusant, développer la créativité et tisser des liens sociaux...",
        en: "Games, contests, theater, crafts... learning while having fun, enhancing creativity, and strengthening social bonds...",
        ar: "ألعاب، مسابقات، مسرح، أشغال يدوية... للتعلم من خلال المتعة، وتعزيز الإبداع، وتقوية الروابط الاجتماعية...",
      },
    },
    {
      id: 8,
      photo: "https://picsum.photos/200/300",
      title: {
        fr: "Coaching Scolaire",
        en: "School Coaching",
        ar: "التوجيه المدرسي",
      },
      description: {
        fr: "Accompagnement personnalisé des élèves pour gérer le temps, organiser le travail, préparer les examens, avec implication des parents...",
        en: "Personalized support for students to manage time, organize study, and prepare for exams, with parental involvement...",
        ar: "مواكبة فردية للتلاميذ لتنظيم الوقت، تحسين طرق المراجعة، والاستعداد للامتحانات بمشاركة الآباء...",
      },
    },
  ];
  

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
                            return <ServiceCard {...item} key={item.id} />;
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
                    className=" w-[50%] h-11 font-B bg-orangeColor transition-all  hover:opacity-[0.6] text-white  md:w-[30%] rounded md:mx-auto "
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
